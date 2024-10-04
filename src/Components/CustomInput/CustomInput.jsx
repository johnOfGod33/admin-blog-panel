import React from "react";
import style from "./CustomInput.module.css";

const CustomInput = ({ type, placeholder, setState }) => {
  return (
    <input
      required
      className={style.input}
      type={type}
      placeholder={placeholder}
      onChange={(e) => setState(e.target.value)}
      min={0}
    />
  );
};

export default CustomInput;
