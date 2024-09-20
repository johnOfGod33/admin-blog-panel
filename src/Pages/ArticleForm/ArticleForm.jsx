import React, { useState } from "react";
import style from "./ArticleForm.module.css";
import { useParams } from "react-router-dom";
import Editor from "../../Components/Layouts/ArticleFormLayout/Editor";

const ArticleForm = () => {
  const { action, articleId } = useParams();
  const [content, setContent] = useState("");

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
        </form>
      </section>
    </div>
  );
};

export default ArticleForm;
