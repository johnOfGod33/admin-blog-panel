const updateArticle = async (privateAxios, article, articleId) => {
  try {
    const response = await privateAxios.put(
      `articles/updateArticle/${articleId}`,
      article
    );

    console.log(response.data);
  } catch (err) {
    throw err;
  }
};

export default updateArticle;
