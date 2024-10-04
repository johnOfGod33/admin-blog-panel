import React, { useEffect, useState } from "react";
import CustomButtom from "../../Components/CustomButton/CustomButton";
import style from "./Articles.module.css";
import ArticlesList from "../../Components/Layouts/ArticleLayout/ArticlesList/ArticlesList";
import Filter from "../../Components/Layouts/ArticleLayout/Filter/Filter";
import UseUserContext from "../../Hooks/UseUserContext";
import getPublishedArticle from "../../api/services/articles/getPublishedArticle";
import UsePrivateAxios from "../../Hooks/UsePrivateAxios";
import getDraftArticles from "../../api/services/articles/getDraftArticles";
import { useNavigate } from "react-router-dom";
import MenuIcon from "../../Components/Layouts/ArticleLayout/MenuIcon/MenuIcon";

const Articles = () => {
  const navigate = useNavigate();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const privateAxios = UsePrivateAxios();
  const { userInfo, setUserInfo } = UseUserContext();
  const [trigger, setTrigger] = useState(false);
  const [articleList, setArticleList] = useState([]);
  const [filter, setFilter] = useState("publish");

  useEffect(() => {
    (async () => {
      if (filter === "publish") {
        await getPublishedArticle(userInfo.email, setArticleList);
      } else if (filter === "draft")
        await getDraftArticles(privateAxios, setArticleList);
    })();
  }, [filter, trigger]);

  return (
    <div className={style.container}>
      <section className={style.header}>
        <div className={style.header_title}>
          <h2>Articles</h2>
        </div>
        <MenuIcon menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
        <div
          className={style.header_button}
          style={menuIsOpen ? { display: "flex" } : {}}
        >
          <CustomButtom type={"button"} handleClick={() => navigate("Create")}>
            + Add
          </CustomButtom>
          <CustomButtom type={"button"} handleClick={() => setUserInfo({})}>
            Log out
          </CustomButtom>
        </div>
      </section>
      <section className={style.main}>
        <section className={style.filter}>
          <Filter filter={filter} setFilter={setFilter} />
        </section>
        <section className={style.articleList}>
          <ArticlesList articleList={articleList} setTrigger={setTrigger} />
        </section>
      </section>
    </div>
  );
};

export default Articles;
