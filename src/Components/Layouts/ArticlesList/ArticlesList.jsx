import React from "react";
import style from "./ArticlesList.module.css";

const ArticlesList = ({ articleList }) => {
  return (
    <>
      {articleList.map((article) => (
        <div className={style.article} key={article.key}>
          <div className={style.article_title}>
            <h4>{article.title}</h4>
          </div>
          <div className={style.article_buttons}>
            <button className={style.article_buttons_edit}>Edit</button>
            <button className={style.article_buttons_delete}>Delete</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ArticlesList;
