import React from "react";
import style from "./CustomButton.module.css";

const CustomButton = ({ type, children, handleClick }) => {
  return (
    <button className={style.button} type={type} onClick={handleClick}>
      {children}
    </button>
  );
};

export default CustomButton;
