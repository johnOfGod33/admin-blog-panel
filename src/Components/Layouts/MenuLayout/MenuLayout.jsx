import React from "react";
import Header from "../../Header/Header";
import style from "./MenuLayout.module.css";
import { Outlet } from "react-router-dom";

const MenuLayout = () => {
  return (
    <div>
      <section className={style.header}>
        <Header />
      </section>
      <section className={style.outlet}>
        <Outlet />
      </section>
    </div>
  );
};

export default MenuLayout;
