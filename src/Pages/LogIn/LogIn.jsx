import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "../SignUp/SignUp.module.css";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomInput from "../../Components/CustomInput/CustomInput";
import loginUser from "../../api/services/loginUser";
import updateUserContext from "../../utils/updateUserContext";

const LogIn = () => {
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitForm = async (e, email, inputPassword) => {
    e.preventDefault();

    try {
      const response = await loginUser(email, inputPassword);
      updateUserContext(response.data);
      navigation("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={style.body}>
      <div className={style.container}>
        <section>
          <h3>Log In</h3>
        </section>
        <section>
          <p>complete the form to log in</p>
        </section>
        <section className={style.form}>
          <form onSubmit={(e) => handleSubmitForm(e, email, password)}>
            <CustomInput placeholder={"Email"} setState={setEmail} />
            <CustomInput placeholder={"Password"} setState={setPassword} />
            <CustomButton>Log In</CustomButton>
          </form>
        </section>
        <section>
          <p>
            haven't account ?{" "}
            <span onClick={() => navigation("/signup")}>Sign Up</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default LogIn;
