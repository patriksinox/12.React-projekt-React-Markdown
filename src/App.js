import React from "react";
import ReactMarkdown from "react-markdown";
import { useState } from "react";

function App() {
  const [text, setText] = useState("## Markdown Ukážka");

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <textarea
            value={text}
            className="shadow-lg p-5"
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <div className="col-sm-6">
          <div className="obsah shadow-lg p-5">
            <ReactMarkdown>{text}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
