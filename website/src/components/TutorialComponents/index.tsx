import React, { useState, useRef, useEffect } from "react";
import { LiveProvider, LiveEditor } from "react-live";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import { type Props } from "@theme/CodeBlock";
import { usePrismTheme } from "@docusaurus/theme-common";
import useIsBrowser from "@docusaurus/useIsBrowser";
import { Language } from "prism-react-renderer";
import GitHubButton from 'react-github-btn';
import liveCodeBlockStyles from "@docusaurus/theme-live-codeblock/src/theme/Playground/styles.module.css";
import styles from "./styles.module.css";

// [CONFIG HERE] custom language run process (client side) imports
import runZ3Web from "./runZ3Web";
import runZ3JSWeb from "./runZ3JSWeb";

// [CONFIG HERE] language-process mapping
const clientConfig = {
  'z3': runZ3Web,
  'z3-js': runZ3JSWeb,
};

interface MyProps extends Props {
  readonly id: string;
  readonly input: string;
  readonly language?: Language;
  readonly editable?: boolean;
  readonly onChange?: (code: string) => void;
}

function OutputToggle({ onClick }) {
  return (
    <button className="button button--primary" onClick={onClick}>
      Run
    </button>
  );
}

function RunButton({ onClick, runFinished }) {
  return (
    <button className="button button--primary" onClick={onClick}>
      {runFinished ? "Edit and Run" : "Running..."}
    </button>
  );
}

export function GithubDiscussionBtn({ repo }) {
  return (
    <div>
      <GitHubButton
        href={`https://github.com/${repo}/discussions`}
        data-size="large"
        aria-label={`Discuss ${repo} on GitHub`}
      >
        Discuss
      </GitHubButton>
    </div>
  );
}

function Output({ result, codeChanged, statusCodes }) {
  const success = result.status === statusCodes.success;
  const emptyOutput = result.output === "";
  return (
    <div>
      <b>Output{codeChanged ? " (outdated)" : ""}:</b>
      <br />
      <pre className={codeChanged ? styles.outdated : ""}>
        {success ? (
          ""
        ) : (
          <span style={{ color: "red" }}>
            <b>Error: </b>
            <br />
          </span>
        )}
        {success
          ? emptyOutput
            ? "--Output is empty--"
            : result.output
          : result.error}
      </pre>
    </div>
  );
}

function CustomCodeEditor(props: MyProps) {
  const { id, input, language, showLineNumbers, editable, onChange } = props;

  const prismTheme = usePrismTheme();
  const isBrowser = useIsBrowser();

  const component = (
    <div
      className={`${liveCodeBlockStyles.playgroundContainer} ${editable ? styles.editable : ""
        }`}
    >
      <LiveProvider code={input} theme={prismTheme} id={id}>
        <>
          <LiveEditor
            disabled={!editable}
            key={String(isBrowser)}
            className={liveCodeBlockStyles.playgroundEditor}
            onChange={onChange}
            language={language}
          />
        </>
      </LiveProvider>
    </div>
  );

  return <>{isBrowser ? component : <></>}</>;
}

export default function CustomCodeBlock({ input }) {
  const { lang, highlight, statusCodes, code, result, githubRepo } = input;

  const [currCode, setCurrCode] = useState(code);

  const [codeChanged, setCodeChanged] = useState(false);

  const [outputRendered, setOutputRendered] = useState(false);

  const [runFinished, setRunFinished] = useState(true);

  const [output, setOutput] = useState(result);

  const onDidClickOutputToggle = () => {
    setOutputRendered(!outputRendered);
  };

  // bypassing server-side rendering
  const onDidClickRun = ExecutionEnvironment.canUseDOM
    ? () => {
      setRunFinished(false);
      // TODO: only load z3 when needed
      const newResult = { ...result };
      let errorMsg;

      const runProcess = clientConfig[lang];
      // `z3.interrupt` -- set the cancel status of an ongoing execution, potentially with a timeout (soft? hard? we should use hard)
      runProcess(currCode)
        .then((res) => {
          const result = JSON.parse(res);
          if (result.output) {
            const errRegex = new RegExp(
              /(\(error)|(unsupported)|([eE]rror:)/g
            );
            const hasError = result.output.match(errRegex);
            newResult.output = hasError ? "" : result.output;
            newResult.error = hasError ? result.output : "";
            newResult.status = hasError
              ? statusCodes.runtimeError
              : statusCodes.success;
          } else if (result.error) {
            newResult.error = result.error;
            newResult.status = statusCodes.runError;
          }
        })
        .catch((error) => {
          // runProcess fails
          errorMsg = `${lang}-web failed with input:\n${currCode}\n\nerror:\n${error}`;
          newResult.error = errorMsg;
          newResult.status = `${lang}-web-failed`;
          throw new Error(errorMsg);
        })
        .finally(() => {
          setOutput(newResult);
          setCodeChanged(false);
          setRunFinished(true);
        });
    }
    : () => { };

  const onDidChangeCode = (code: string) => {
    setCurrCode(code);
    if (outputRendered) setCodeChanged(true);
  };
  const inputNode = <>{code}</>;

  return (
    <div>
      <div className={styles.buttons}>
        {outputRendered ? (
          <div />
        ) : (
          <OutputToggle onClick={onDidClickOutputToggle} />
        )}
        {outputRendered ? (
          <RunButton onClick={onDidClickRun} runFinished={runFinished} />
        ) : (
          <div />
        )}
        {githubRepo ? (
          <GithubDiscussionBtn repo={githubRepo} />
        ) : (
          <div />
        )}
      </div>
      <CustomCodeEditor
        children={inputNode}
        input={code}
        id={result.hash}
        showLineNumbers={true}
        onChange={onDidChangeCode}
        editable={outputRendered}
        language={highlight as Language}
      />
      {outputRendered ? (
        <Output
          codeChanged={codeChanged}
          result={output}
          statusCodes={statusCodes}
        />
      ) : (
        <div />
      )}
    </div>
  );
}
