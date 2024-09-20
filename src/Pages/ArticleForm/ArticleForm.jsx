import React, { useEffect, useState } from "react";
import style from "./ArticleForm.module.css";
import { useParams } from "react-router-dom";
import Editor from "../../Components/Layouts/ArticleFormLayout/Editor/Editor";
import UsePrivateAxios from "../../Hooks/UsePrivateAxios";
import createArticle from "../../api/services/articles/createArticle";
import getArticleById from "../../api/services/articles/getArticleById";
import updateArticle from "../../api/services/articles/updateArticle";
import Buttons from "../../Components/Layouts/ArticleFormLayout/Buttons/Buttons";

const ArticleForm = () => {
  const { action, articleId } = useParams();
  const privateAxios = UsePrivateAxios();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(false);
  const [articleToEdit, setArticleToEdit] = useState({});

  const onCreatePage = () => {
    return action === "Create";
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    onCreatePage()
      ? await createArticle(privateAxios, {
          title,
          description,
          content,
          published,
        })
      : await updateArticle(
          privateAxios,
          { ...articleToEdit, title, description, content, published },
          articleId
        );
  };

  useEffect(() => {
    !onCreatePage() &&
      (async () => {
        let article = await getArticleById(articleId);
        setArticleToEdit(article);
      })();
  }, []);

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
              value={!onCreatePage() ? articleToEdit.title : title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={style.form_description}>
            <input
              type="text"
              placeholder="short description of your article here..."
              value={!onCreatePage() ? articleToEdit.description : description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <Editor
            value={onCreatePage() ? content : articleToEdit.content}
            setValue={setContent}
          />
          <Buttons
            action={action}
            articleIsPublished={articleToEdit.published}
            setPublished={setPublished}
          />
        </form>
      </section>
    </div>
  );
};

export default ArticleForm;
