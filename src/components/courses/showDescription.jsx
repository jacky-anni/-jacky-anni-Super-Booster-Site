import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const ShowDescription = ({ course_ }) => {
  return (
    <CKEditor
      style={{ height: "30px" }}
      editor={ClassicEditor}
      data={course_ && course_.description ? course_.description : ""}
      disabled={true}
      config={{
        isReadOnly: true,
        toolbar: false
      }}
    />
  );
};

export default ShowDescription;
