import React, { useEffect, useRef, useState } from "react";
import style from "./ArticleForm.module.css";
import { useParams } from "react-router-dom";
import createEditor from "../../utils/createEditor";

const ArticleForm = () => {
  const { action, articleId } = useParams();
  const editorInstance = useRef(null);

  useEffect(() => {
    editorInstance.current = createEditor();
  });

  const button = () => {
    if (action == "Create") {
      return (
        <>
          <button className={style.form_buttons_publish} type="submit">
            Publish
          </button>
          <button className={style.form_buttons_draft} type="submit">
            Save Draft
          </button>
        </>
      );
    } else if (action == "Edit") {
      return (
        <>
          <button className={style.form_buttons_save} type="submit">
            Save Change
          </button>
        </>
      );
    }
  };

  const handleSubmitButton = (e) => {
    e.preventDefault();

    editorInstance.current.save().then((outputData) => {
      console.log(outputData);
    });
  };

  return (
    <div className={style.container}>
      <section className={style.title}>
        <h4> {action} article </h4>
      </section>
      <section className={style.form}>
        <form onSubmit={(e) => handleSubmitButton(e)}>
          <div className={style.form_title}>
            <input type="text" placeholder="New article title here..." />
          </div>
          <div className={style.form_editor} id="editorjs"></div>;
          <div className={style.form_buttons}>{button()}</div>
        </form>
      </section>
    </div>
  );
};

export default ArticleForm;
