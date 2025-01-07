import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../Components/CustomButton/CustomButton";
import CustomInput from "../../Components/CustomInput/CustomInput";
import signupUser from "../../api/services/users/signupUser";
import style from "./SignUp.module.css";

const SignUp = () => {
  const navigation = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitForm = async (e, username, email, password) => {
    e.preventDefault();

    try {
      await signupUser(username, email, password);
      navigation("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={style.body}>
      <div className={style.container}>
        <div className={style.header}>
          <h2>Create Account</h2>
          <p className={style.subtitle}>
            Complete the form to start your journey
          </p>
        </div>

        <form
          className={style.form}
          onSubmit={(e) => handleSubmitForm(e, username, email, password)}
        >
          <div className={style.inputGroup}>
            <CustomInput
              placeholder="Username"
              setState={setUsername}
              icon="user"
            />
            <CustomInput
              type="email"
              placeholder="Email"
              setState={setEmail}
              icon="email"
            />
            <CustomInput
              type="password"
              placeholder="Password"
              setState={setPassword}
              icon="lock"
            />
          </div>

          <CustomButton className={style.submitButton}>
            Create Account
          </CustomButton>
        </form>

        <p className={style.loginLink}>
          Already have an account?{" "}
          <span onClick={() => navigation("/login")}>Sign In</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
