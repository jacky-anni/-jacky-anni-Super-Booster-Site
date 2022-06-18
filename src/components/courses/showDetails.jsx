import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const ShowDetails = ({ course_ }) => {
  return (
    <>
      {course_ && course_.detaille ? (
        <CKEditor
          editor={ClassicEditor}
          data={course_ && course_.detaille ? course_.detaille : ""}
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

export default ShowDetails;
