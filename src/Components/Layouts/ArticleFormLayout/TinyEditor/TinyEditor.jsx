import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import React from "react";

const TinyEditor = ({ content, setContent }) => {
  const editorRef = useRef(null);

  return (
    <>
      <Editor
        apiKey={process.env.REACT_APP_TINY_API_KEY}
        onInit={(_evt, editor) => (editorRef.current = editor)}
        onChange={() => setContent(editorRef.current.getContent())}
        initialValue={content}
        init={{
          height: 350,
          width: "100%",
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | preview " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | image " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </>
  );
};

export default TinyEditor;
