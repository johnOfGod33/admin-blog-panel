import React, { useState } from "react";
import style from "./ArticleForm.module.css";
import { useParams } from "react-router-dom";
import Editor from "../../Components/Layouts/ArticleFormLayout/Editor";

const ArticleForm = () => {
  const { action, articleId } = useParams();
  const [content, setContent] = useState("");

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

  return (
    <div className={style.container}>
      <section className={style.title}>
        <h4> {action} article </h4>
      </section>
      <section className={style.form}>
        <form>
          <div>
            <input type="text" placeholder="Article Title" />
          </div>
          <Editor value={content} setValue={setContent} />
          <div className={style.form_buttons}>
            <button>Publish</button>
            <button>Save Draft</button>
            <button>Save Change</button>
          </div>
          <div className={style.form_editor} id="editorjs"></div>;
          <div className={style.form_buttons}>{button()}</div>
        </form>
      </section>
    </div>
  );
};

export default ArticleForm;
