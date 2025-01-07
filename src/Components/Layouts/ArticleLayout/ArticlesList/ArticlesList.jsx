import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import deleteArticle from "../../../../api/services/articles/deleteArticle";
import UsePrivateAxios from "../../../../Hooks/UsePrivateAxios";
import style from "./ArticlesList.module.scss";

const ArticlesList = ({ articleList, setTrigger }) => {
  const privateAxios = UsePrivateAxios();
  const navigate = useNavigate();
  const [deletingId, setDeletingId] = useState(null);

  const handleDelete = async (articleId) => {
    setDeletingId(articleId);
    try {
      await deleteArticle(privateAxios, articleId, setTrigger);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className={style.articlesList}>
      {articleList.length > 0 ? (
        articleList.map((article) => (
          <article className={style.articleCard} key={article._id}>
            <div className={style.articleContent}>
              <div className={style.articleMain}>
                <h3>{article.title}</h3>
                <p className={style.excerpt}>
                  {article.content?.substring(0, 120)}...
                </p>
              </div>
            </div>

            <div className={style.actions}>
              <button
                className={style.editButton}
                onClick={() => navigate(`Edit/${article._id}`)}
              >
                <svg className={style.icon} viewBox="0 0 24 24">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                </svg>
                Edit
              </button>
              <button
                className={style.deleteButton}
                onClick={() => handleDelete(article._id)}
                disabled={deletingId === article._id}
              >
                {deletingId === article._id ? (
                  <span className={style.spinner}></span>
                ) : (
                  <>
                    <svg className={style.icon} viewBox="0 0 24 24">
                      <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                    </svg>
                    Delete
                  </>
                )}
              </button>
            </div>
          </article>
        ))
      ) : (
        <div className={style.emptyState}>
          <svg className={style.emptyIcon} viewBox="0 0 24 24">
            <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z" />
          </svg>
          <p>No articles found</p>
        </div>
      )}
    </div>
  );
};

export default ArticlesList;
