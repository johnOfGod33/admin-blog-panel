import { basicAxios } from "../../config/axios";

const getPublishedArticle = async (email, setArticleList) => {
  try {
    const response = await basicAxios.get(
      `articles/getPublishedArticles/${email}`
    );

    setArticleList(response.data);
  } catch (err) {
    throw err;
  }
};

export default getPublishedArticle;
