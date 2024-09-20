import React, { useState } from "react";
import style from "./ArticleForm.module.css";
import { useParams } from "react-router-dom";
import Editor from "../../Components/Layouts/ArticleFormLayout/Editor";

const ArticleForm = () => {
  const { action, articleId } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(false);

  const button = () => {
    if (action === "Create") {
      return (
        <>
          <button
            className={style.form_buttons_publish}
            onClick={() => setPublished(true)}
            type="submit"
          >
            Publish
          </button>
          <button
            className={style.form_buttons_draft}
            onClick={() => setPublished(false)}
            type="submit"
          >
            Save Draft
          </button>
        </>
      );
    } else if (action === "Edit") {
      return (
        <>
          <button className={style.form_buttons_save} type="submit">
            Save Change
          </button>
        </>
      );
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const article = { title, content, published };
    console.log(article);
  };

  return (
    <div className={style.container}>
      <section className={style.title}>
        <h4> {action} article </h4>
      </section>
      <section className={style.form}>
        <form onSubmit={handleSubmitForm}>
          <div className={style.form_title}>
            <input
              type="text"
              placeholder="Article title her...
              "
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <Editor value={content} setValue={setContent} />
          <div className={style.form_buttons}>{button()}</div>
        </form>
      </section>
    </div>
  );
};

export default ArticleForm;
