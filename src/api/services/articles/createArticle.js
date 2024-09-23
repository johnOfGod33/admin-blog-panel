const createArticle = async (privateAxios, article) => {
  try {
    const response = await privateAxios.post(`articles/createArticle`, article);

    console.log(response.data);
  } catch (err) {
    throw err;
  }
};

export default createArticle;
