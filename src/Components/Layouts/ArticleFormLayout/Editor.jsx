"use client";
import React, { useState } from "react";
import { EditorContent, EditorRoot } from "novel";

const Editor = () => {
  const [content, setContent] = useState(null);
  return (
    <EditorRoot>
      <EditorContent
        initialContent={content}
        onUpdate={({ editor }) => {
          const json = editor.getJSON();
          setContent(json);
        }}
      />
    </EditorRoot>
  );
};

export default Editor;
