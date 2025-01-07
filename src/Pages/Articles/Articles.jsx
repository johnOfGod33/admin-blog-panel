import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../Components/CustomButton/CustomButton";
import ArticlesList from "../../Components/Layouts/ArticleLayout/ArticlesList/ArticlesList";
import Filter from "../../Components/Layouts/ArticleLayout/Filter/Filter";
import MenuIcon from "../../Components/Layouts/ArticleLayout/MenuIcon/MenuIcon";
import UsePrivateAxios from "../../Hooks/UsePrivateAxios";
import UseUserContext from "../../Hooks/UseUserContext";
import getDraftArticles from "../../api/services/articles/getDraftArticles";
import getPublishedArticle from "../../api/services/articles/getPublishedArticle";
import style from "./Articles.module.scss";

const Articles = () => {
  const navigate = useNavigate();
  const privateAxios = UsePrivateAxios();
  const { userInfo, setUserInfo } = UseUserContext();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [articleList, setArticleList] = useState([]);
  const [filter, setFilter] = useState("publish");
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        if (filter === "publish") {
          await getPublishedArticle(userInfo.email, setArticleList);
        } else if (filter === "draft") {
          await getDraftArticles(privateAxios, setArticleList);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [filter, trigger, userInfo.email, privateAxios]);

  const handleLogout = () => {
    setUserInfo({});
    navigate("/login");
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <header className={style.header}>
          <div className={style.headerLeft}>
            <h1>My Articles</h1>
            <div className={style.stats}>
              <span>{articleList.length} articles</span>
              <span>{filter === "publish" ? "Published" : "Draft"}</span>
            </div>
          </div>

          <div className={style.headerActions}>
            <MenuIcon menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
            <div
              className={`${style.actionButtons} ${
                menuIsOpen ? style.show : ""
              }`}
            >
              <CustomButton
                type="button"
                className={style.createButton}
                handleClick={() => navigate("Create")}
              >
                <span>+</span> New Article
              </CustomButton>
              <CustomButton
                type="button"
                className={style.logoutButton}
                handleClick={handleLogout}
              >
                Log out
              </CustomButton>
            </div>
          </div>
        </header>

        <main className={style.main}>
          <div className={style.filterSection}>
            <Filter filter={filter} setFilter={setFilter} />
          </div>

          <div className={style.articlesSection}>
            {loading ? (
              <div className={style.loading}>Loading articles...</div>
            ) : articleList.length === 0 ? (
              <div className={style.emptyState}>
                <p>No articles found</p>
                <CustomButton
                  type="button"
                  handleClick={() => navigate("Create")}
                >
                  Create your first article
                </CustomButton>
              </div>
            ) : (
              <ArticlesList articleList={articleList} setTrigger={setTrigger} />
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Articles;
