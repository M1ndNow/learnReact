import React from "react";
import Title from "../components/Title";

export default class BlogWriting extends React.Component {
  state = {
    name: "",
    content: "",
  };

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleContentChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  submit = () => {
    alert("提交成功!");
  };

  render() {
    const { name, content } = this.state;
    return (
      <div>
        <Title text="写博客" />
        <input
          value={name}
          onChange={this.handleNameChange}
          placeholder={"用户名"}
        ></input>
        <input
          value={content}
          onChange={this.handleContentChange}
          placeholder={"内容"}
        ></input>
        <button onClick={this.submit}>提交</button>
      </div>
    );
  }
}
