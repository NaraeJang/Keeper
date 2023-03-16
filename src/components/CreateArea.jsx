import React, { useState } from "react";

function CreateArea(props) {
  // const [contentText, setContentText] = useState("");
  // const [titleText, setTitleText] = useState("");

  // function handleContentText(event) {
  //   const newContent = event.target.value;
  //   setContentText(newContent);
  // }

  // function handleTitleText(event) {
  //   const newTitle = event.target.value;
  //   setTitleText(newTitle);
  // }

  const [text, setText] = useState({ title: "", content: "" });

  function handleText(event) {
    const { name, value } = event.target;

    setText((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleText}
          name="title"
          placeholder="Title"
          value={text.title}
        />
        <textarea
          onChange={handleText}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={text.content}
        />
        <button
          onClick={() => {
            props.onClick(text);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
