import React, { useState, useEffect } from "react";

export default function ToDo() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      console.log("hello");
    }, 2000);
  }, [name]);

  function handleClick() {
    setList([...list, { name, text }]);
    setName("");
    setText("");
  }

  function handleDelete(index) {
    list.splice(index, 1);
    setList([...list]);
  }

  return (
    <div className="container">
      <input
        placeholder="昵称"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>
      <input
        placeholder="内容"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        添加
      </button>
      <ul>
        {list.map((item, index) => (
          <li>
            {item.name}:{item.text}
            <button
              value={index}
              onClick={(e) => {
                handleDelete(e.target.value);
              }}
            >
              删除
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
