import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const ShowDetails = ({ course_ }) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={course_ && course_.detaille ? course_.detaille : ""}
      disabled={true}
      config={{
        isReadOnly: true,
        toolbar: false
      }}
    />
  );
};

export default ShowDetails;
