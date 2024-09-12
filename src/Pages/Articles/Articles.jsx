import React, { useState } from "react";
import CustomButtom from "../../Components/CustomButton/CustomButton";
import style from "./Articles.module.css";
import ArticlesList from "../../Components/Layouts/ArticlesList/ArticlesList";

const Articles = () => {
  const [articleList, setArticleList] = useState([
    {
      key: 1,
      title: "my first article",
    },
    {
      key: 2,
      title: "my second article",
    },
    {
      key: 3,
      title: "my third article",
    },
    {
      key: 4,
      title: "my fourth article",
    },
    {
      key: 5,
      title: "my fifth article",
    },
    {
      key: 6,
      title: "my six article",
    },
  ]);
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
      <section className={style.articleList}>
        <ArticlesList articleList={articleList} />
      </section>
    </div>
  );
};

export default Articles;
