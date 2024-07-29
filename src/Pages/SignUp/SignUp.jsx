import React, { useState } from "react";
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import style from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigation = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitForm = (e, username, email, password) => {
    e.preventDefault();
    console.log({ username, email, password });
  };
  return (
    <div className={style.body}>
      <div className={style.container}>
        <section>
          <h3>Sign Up</h3>
        </section>
        <section>
          <p>Complete the form and create your account</p>
        </section>
        <section className={style.form}>
          <form
            onSubmit={(e) => handleSubmitForm(e, username, email, password)}
          >
            <CustomInput placeholder={"Username"} setState={setUsername} />
            <CustomInput placeholder={"Email"} setState={setEmail} />
            <CustomInput placeholder={"Password"} setState={setPassword} />
            <CustomButton>Sign Up</CustomButton>
          </form>
        </section>
        <section>
          <p>
            Already have account ?{" "}
            <span onClick={() => navigation("/login")}>Log In</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default SignUp;
