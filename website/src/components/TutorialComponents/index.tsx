import React, { useState } from 'react';
import CodeBlock from "@theme/CodeBlock";

const Output = ({ msg }) => {
  return (
    <pre>
      <b>Output: </b>
      {msg}
      {"\n"}
    </pre>
  );
};

export default function Z3CodeBlock({ input }) {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
  };
  const buttonTxt = (count > 0) ? "Click to Hide Output" : "Click to Render Output";
  return (
    <div>
      <button onClick={handleClick}>{buttonTxt}</button>
      <CodeBlock
        language="lisp"
        showLineNumbers
      >
        {input.code}
      </CodeBlock>
      {count > 0 ? <Output msg="Some output" /> : <div />}
    </div>
  );
}