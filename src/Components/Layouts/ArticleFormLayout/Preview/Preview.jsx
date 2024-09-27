import React from "react";
import style from "./Preview.module.css";

const Preview = ({ title, content }) => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>{title}</h1>
      </div>
      <div
        className={style.content}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export default Preview;
