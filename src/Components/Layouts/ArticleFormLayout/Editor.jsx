import React, { useEffect, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import style from "./Editor.module.css";

const Editor = () => {
  return <div className={style.editor} id="editorjs"></div>;
};

export default Editor;
