import React, { useState } from "react";
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import style from "./SignUp.module.css";

const SignUp = () => {
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
          <p>connectez vous !</p>
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
      </div>
    </div>
  );
};

export default SignUp;
