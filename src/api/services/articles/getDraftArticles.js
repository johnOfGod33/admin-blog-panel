const getDraftArticles = async (privateAxios, setArticleList) => {
  try {
    const response = await privateAxios.get("/articles/getDraftArticles");

    setArticleList(response.data);
  } catch (err) {
    throw err;
  }
};

export default getDraftArticles;
