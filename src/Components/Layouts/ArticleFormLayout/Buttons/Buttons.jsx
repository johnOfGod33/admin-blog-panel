import React from "react";
import style from "./Buttons.module.css";

const Buttons = ({ action, articleIsPublished, setPublished }) => {
  const onCreatePage = () => {
    return action === "Create";
  };

  const button = () => {
    const defaultButtons = (
      <>
        <button
          className={style.buttons_publish}
          onClick={() => setPublished(true)}
          type="submit"
        >
          Publish
        </button>
        <button
          className={style.buttons_draft}
          onClick={() => setPublished(false)}
          type="submit"
        >
          Save Draft
        </button>
      </>
    );

    if (onCreatePage()) {
      return defaultButtons;
    } else {
      if (articleIsPublished) {
        return (
          <>
            <button className={style.buttons_save} type="submit">
              Save Change
            </button>
          </>
        );
      } else {
        return defaultButtons;
      }
    }
  };

  return <div className={style.buttons}>{button()}</div>;
};

export default Buttons;
