import React from "react";
import style from "./MenuIcon.module.scss";
const MenuIcon = ({ menuIsOpen, setMenuIsOpen }) => {
  const toggleMenu = () => {
    setMenuIsOpen((prevstate) => !prevstate);
  };
  return (
    <div className={style.container}>
      {menuIsOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={style.icon}
          onClick={toggleMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={style.icon}
          onClick={toggleMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      )}
    </div>
  );
};

export default MenuIcon;
