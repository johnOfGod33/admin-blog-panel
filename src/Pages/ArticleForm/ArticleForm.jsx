import React from "react";
import style from "./ArticleForm.module.css";
import { useParams } from "react-router-dom";
const ArticleForm = () => {
  const { action, articleId } = useParams();

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
