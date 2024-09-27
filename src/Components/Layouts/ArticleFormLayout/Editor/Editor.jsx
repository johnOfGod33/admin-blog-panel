import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import style from "./Editor.module.css";

const Editor = ({ value, setValue }) => {
  const modules = {
    toolbar: [
      [{ header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };
  return (
    <ReactQuill
      modules={modules}
      theme="snow"
      value={value}
      onChange={setValue}
      placeholder="Write your article content here..."
      style={{ width: "100%", height: "40vh", textAlign: "left" }}
      className={style.editor}
    />
  );
};

export default Editor;
