import React, { useState } from "react";
import uuid from "react-uuid";

function Input({ todos, setTodo }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  const AddBtnHandler = (event) => {
    event.preventDefault();

    if (title.trim() === "" || content.trim() === "") {
      alert("제목과 내용을 입력해주세요!");
      return;
    }
    const newTodo = {
      id: uuid(),
      title,
      content,
      isDone: false,
    };
    setTodo([...todos, newTodo]);
    setTitle("");
    setContent("");
  };

  return (
    <div className="Input-Container">
      <form className="Input">
        <label className="title-label">제목</label>
        <input
          className="title-Input"
          type="text"
          value={title}
          onChange={titleChangeHandler}
        ></input>

        <label className="content-label">내용</label>
        <input
          className="content-Input"
          type="text"
          value={content}
          onChange={contentChangeHandler}
        ></input>
        <button className="AddBtn" onClick={AddBtnHandler}>
          제출하기
        </button>
      </form>
    </div>
  );
}

export default Input;
