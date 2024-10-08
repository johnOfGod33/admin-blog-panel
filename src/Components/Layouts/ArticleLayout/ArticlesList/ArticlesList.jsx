import React from "react";
import style from "./ArticlesList.module.css";
import deleteArticle from "../../../../api/services/articles/deleteArticle";
import UsePrivateAxios from "../../../../Hooks/UsePrivateAxios";
import { useNavigate } from "react-router-dom";

const ArticlesList = ({ articleList, setTrigger }) => {
  const privateAxios = UsePrivateAxios();
  const navigate = useNavigate();
  return (
    <>
      {articleList.length > 0 ? (
        articleList.map((article) => (
          <div className={style.article} key={article._id}>
            <div className={style.article_title}>
              <h4>{article.title}</h4>
            </div>
            <div className={style.article_buttons}>
              <button
                className={style.article_buttons_edit}
                onClick={() => navigate(`Edit/${article._id}`)}
              >
                Edit
              </button>
              <button
                className={style.article_buttons_delete}
                onClick={() =>
                  deleteArticle(privateAxios, article._id, setTrigger)
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className={style.article}>no articles</div>
      )}
    </>
  );
};

export default ArticlesList;
