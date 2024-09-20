import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Paragraph from "@editorjs/paragraph";

const createEditor = () => {
  const editor = new EditorJS({
    autofocus: true,
    holder: "editorjs",
    placeholder: "Write your article content here...",
    inlineToolbar: true,
    tools: {
      header: {
        class: Header,
        config: {
          placeholder: "Heading",
        },
      },
      list: List,
      paragraph: Paragraph,
    },
  });

  return editor;
};

export default createEditor;
