import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function App() {
  const history = useHistory();
  return (
    <div className="container">
      <h1>这是我的首页</h1>
      <Link to="/login/123">使用Link组件跳转到登录页</Link>
      <br />
      <button
        onClick={() => {
          history.push("/login/456");
        }}
      >
        使用history跳转到登录页
      </button>
      <br />
      <Link to="/todo">跳转TODO</Link>
    </div>
  );
}
