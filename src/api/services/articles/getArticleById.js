import { basicAxios } from "../../config/axios";

const getArticleById = async (id) => {
  try {
    const response = await basicAxios.get(`articles/getArticleById/${id}`);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export default getArticleById;
