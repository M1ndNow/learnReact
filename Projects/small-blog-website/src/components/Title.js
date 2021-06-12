import React from "react";
import { useHistory } from "react-router-dom";

export default function Title(props) {
  const history = useHistory();

  return (
    <div>
      <h1>{props.text}</h1>
      <button
        value="HOME_PAGE"
        onClick={() => {
          history.push("/");
        }}
      >
        首页
      </button>
      <button
        value="WRITE_PAGE"
        onClick={() => {
          history.push("/write");
        }}
      >
        写博客
      </button>
    </div>
  );
}
