import React, { useEffect, useState } from "react";
import style from "./ArticleForm.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Editor from "../../Components/Layouts/ArticleFormLayout/Editor/Editor";
import UsePrivateAxios from "../../Hooks/UsePrivateAxios";
import createArticle from "../../api/services/articles/createArticle";
import getArticleById from "../../api/services/articles/getArticleById";
import updateArticle from "../../api/services/articles/updateArticle";
import Buttons from "../../Components/Layouts/ArticleFormLayout/Buttons/Buttons";
import CustomButton from "../../Components/CustomButton/CustomButton";
import Preview from "../../Components/Layouts/ArticleFormLayout/Preview/Preview";

const ArticleForm = () => {
  const { action, articleId } = useParams();
  const privateAxios = UsePrivateAxios();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(true);
  const [articleToEdit, setArticleToEdit] = useState({});
  const [previewActive, setPreviewActive] = useState(false);
  const onCreatePage = () => {
    return action === "Create";
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
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

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    !onCreatePage() &&
      (async () => {
        let article = await getArticleById(articleId);
        setArticleToEdit(article);
        setTitle(article.title);
        setDescription(article.description);
        setContent(article.content);
        setPublished(article.published);
      })();
  }, []);

  return (
    <div className={style.container}>
      <section className={style.title}>
        <h4> {action} article </h4>
      </section>
      <section>
        <CustomButton
          handleClick={() => setPreviewActive((prevstate) => !prevstate)}
        >
          {previewActive ? "Edit" : "Preview"}
        </CustomButton>
      </section>
      {previewActive ? (
        <section>
          <Preview title={title} content={content} />
        </section>
      ) : (
        <section className={style.form}>
          <form onSubmit={handleSubmitForm}>
            <div className={style.form_title}>
              <input
                type="text"
                placeholder="Article title her...
              "
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className={style.form_description}>
              <input
                type="text"
                placeholder="short description of your article here..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <Editor value={content} setValue={setContent} />
            <Buttons
              action={action}
              articleIsPublished={articleToEdit.published}
              setPublished={setPublished}
            />
          </form>
        </section>
      )}
    </div>
  );
};

export default ArticleForm;
