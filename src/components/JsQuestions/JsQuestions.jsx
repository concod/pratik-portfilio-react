import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import Markdown from "react-markdown";

import "./JsQuestions.scss";
import { useParams } from "react-router-dom";

function JsQuestions({ data = [] }) {
  return (
    <div className="questions_js">
      {data.map((val, i) => (
        <div key={val.key} id={`js-${val.key}`}>
          <div className="questions_js_block">
            <span>{i + 1}.</span>
            <Markdown
              className="markdown_js"
              key={val.key}
              children={val.qst}
            />
          </div>
          <CodeBlock
            language={"javascript"}
            text={val.ans}
            theme={dracula}
            wrapLines={true}
          />
        </div>
      ))}
    </div>
  );
}

export default JsQuestions;
