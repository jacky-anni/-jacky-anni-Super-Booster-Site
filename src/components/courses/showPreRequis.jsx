import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Link } from "react-router-dom";

const ShowPreRequis = ({ course_ }) => {
  return (
    <>
      <CKEditor
        style={{ height: "30px" }}
        editor={ClassicEditor}
        data={course_ && course_.pre_requis ? course_.pre_requis : ""}
        disabled={true}
        config={{
          isReadOnly: true,
          toolbar: false
        }}
      />
    </>
  );
};

export default ShowPreRequis;
