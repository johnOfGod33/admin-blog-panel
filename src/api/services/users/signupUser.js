import { basicAxios } from "../../config/axios";

const signupUser = async (username, email, password) => {
  try {
    const response = await basicAxios.post("/users/signup", {
      username,
      email,
      password,
    });

    console.log("user created");

    return response;
  } catch (err) {
    throw err;
  }
};

export default signupUser;
