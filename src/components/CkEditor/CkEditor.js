
import React, { useState, useEffect } from "react";
import { useInput } from "react-admin";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import UploadAdapter from "./UploadAdapter";

const CkEditor = (props) => {
  const {
    field, 
    fieldState,
    formState,
  } = useInput(props);

  console.log(" CKEditor props received:", props);
  console.log(" React Admin input received:", { field, fieldState, formState });
  const [editorValue, setEditorValue] = useState(field.value || "");

  // useEffect(() => {
  //   if (field.value !== undefined) {
  //     setEditorValue(field.value);
  //   }
  // }, [field.value]);

useEffect(() => {
  if (field.value !== editorValue) {
    setEditorValue(field.value || "");
  }
}, [field.value]);


  return (
    <div style={{ marginBottom: "20px" }}>
     <CKEditor
  editor={ClassicEditor}
  data={editorValue} 
  config={{
    licenseKey: "GPL",
    ckfinder: {
      uploadUrl: "http://localhost:3000/ckeditor/upload-image",
    },
  }}
  onChange={(event, editor) => {
    const data = editor.getData();
    console.log("CKEditor Updated Value:", data);

    setEditorValue(data);

    if (field.onChange) {
      console.log("Calling field.onChange with:", data);
      field.onChange(data); 
    } else {
      console.warn("field.onChange is undefined!");
    }
  }}
  onReady={(editor) => {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return new UploadAdapter(loader);
    };
  }}
/>

      {fieldState?.error && <span style={{ color: "red" }}>{fieldState.error.message}</span>}
    </div>
  );
};

export default CkEditor;
