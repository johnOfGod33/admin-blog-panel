import React from "react";
import style from "./Buttons.module.css";
import { useNavigate } from "react-router-dom";

const Buttons = ({ action, articleIsPublished, setPublished }) => {
  const navigate = useNavigate();
  const onCreatePage = () => {
    return action === "Create";
  };

  const button = () => {
    const cancelButton = <button onClick={() => navigate("/")}>annulez</button>;

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
        {cancelButton}
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
            {cancelButton}
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
