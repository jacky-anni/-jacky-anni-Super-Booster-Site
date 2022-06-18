import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const ShowDescription = ({ course_ }) => {
  return (
    <>
      {course_ && course_.description ? (
        <CKEditor
          editor={ClassicEditor}
          data={course_ && course_.description ? course_.description : ""}
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

export default ShowDescription;
