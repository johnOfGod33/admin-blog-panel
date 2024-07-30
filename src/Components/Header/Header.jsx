import React from "react";
import Research from "./HeaderItem/Research/Research";
import Profile from "./HeaderItem/Profile/Profile";
import style from "./Header.module.css";
const Header = () => {
  return (
    <div className={style.container}>
      <section>
        <Research />
      </section>
      <section>
        <h3>Admin blog panel</h3>
      </section>
      <section>
        <Profile />
      </section>
    </div>
  );
};

export default Header;
