import { basicAxios } from "../../config/axios";

const loginUser = async (email, inputPassword) => {
  try {
    const response = await basicAxios.post("/users/login", {
      email,
      inputPassword,
    });

    console.log("user authentication sucess");
    console.log({ accessToken: response.data });

    return response;
  } catch (err) {
    throw err;
  }
};

export default loginUser;
