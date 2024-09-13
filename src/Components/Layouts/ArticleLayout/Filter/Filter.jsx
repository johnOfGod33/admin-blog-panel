import React from "react";
import style from "./Filter.module.css";

const Filter = ({ filter, setFilter }) => {
  return (
    <div className={style.container}>
      <div
        className={filter === "publish" && style.focus}
        onClick={() => setFilter("publish")}
      >
        Published
      </div>
      <div
        className={filter === "draft" && style.focus}
        onClick={() => setFilter("draft")}
      >
        Draft
      </div>
    </div>
  );
};

export default Filter;
