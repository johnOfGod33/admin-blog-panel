const updateArticle = async (privateAxios, article, articleId) => {
  try {
    const response = await privateAxios.put(
      `articles/updateArticle/${articleId}`,
      article
    );

    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
};

export default updateArticle;
