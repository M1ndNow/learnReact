import React from "react";
import { useParams } from "react-router-dom";

export default function Login() {
  const params = useParams();

  return (
    <div className="container">
      <h1>传递过来的参数：{JSON.stringify(params)}</h1>
      <h1>登录页面</h1>
    </div>
  );
}
