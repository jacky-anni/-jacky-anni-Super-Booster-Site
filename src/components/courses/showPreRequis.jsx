import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Link } from "react-router-dom";

const ShowPreRequis = ({ course_ }) => {
  return (
    <>
      {course_ && course_.pre_requis ? (
        <CKEditor
          editor={ClassicEditor}
          data={course_ && course_.pre_requis ? course_.pre_requis : ""}
          disabled={true}
          config={{
            isReadOnly: true,
            toolbar: false
          }}
        />
      ) : (
        <p className='text-danger'> Pas d'information pour l'instant</p>
      )}
    </>
  );
};

export default ShowPreRequis;
