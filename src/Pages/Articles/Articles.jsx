import React, { useEffect, useState } from "react";
import CustomButtom from "../../Components/CustomButton/CustomButton";
import style from "./Articles.module.css";
import ArticlesList from "../../Components/Layouts/ArticleLayout/ArticlesList/ArticlesList";
import Filter from "../../Components/Layouts/ArticleLayout/Filter/Filter";
import UseUserContext from "../../Hooks/UseUserContext";
import getPublishedArticle from "../../api/services/articles/getPublishedArticle";
const Articles = () => {
  const { userInfo } = UseUserContext();

  const [articleList, setArticleList] = useState([]);

  const [filter, setFilter] = useState("publish");

  useEffect(() => {
    (async () => {
      await getPublishedArticle(userInfo.email, setArticleList);
    })();
  }, [filter]);

  return (
    <div className={style.container}>
      <section className={style.header}>
        <div className={style.header_title}>
          <h2>Articles</h2>
        </div>
        <div className={style.header_button}>
          <CustomButtom type={"button"}>+ Add</CustomButtom>
        </div>
      </section>
      <section className={style.main}>
        <section className={style.filter}>
          <Filter filter={filter} setFilter={setFilter} />
        </section>
        <section className={style.articleList}>
          <ArticlesList articleList={articleList} />
        </section>
      </section>
    </div>
  );
};

export default Articles;
