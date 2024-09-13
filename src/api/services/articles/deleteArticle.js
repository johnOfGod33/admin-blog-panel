const deleteArticle = async (privateAxios, id, setTrigger) => {
  try {
    await privateAxios.delete(`articles/deleteArticle/${id}`);

    setTrigger((prevState) => !prevState);
  } catch (err) {
    throw err;
  }
};

export default deleteArticle;
