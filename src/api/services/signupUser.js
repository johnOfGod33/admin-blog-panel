import { basicAxios } from "../config/axios";

const signupUser = async (username, email, password) => {
  try {
    let response = await basicAxios.post("/users/signup", {
      username,
      email,
      password,
    });

    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export default signupUser;
