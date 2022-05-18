import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { connect } from "react-redux";
import { Button } from "antd";
import { PropTypes } from "prop-types";
import { ToastMessage } from "./../../layout/tost";
import ShowErrors from "./../../layout/showErrors";
import {
  getInfoProfile,
  clear,
  addBio
} from "./../../../actions/profileActions.";

const Presentation = ({
  profile: { errors, validate, profile, loading, profileInfo },
  addBio,
  clear
}) => {
  const [value, setValue] = useState("");
  const [empty, setEmpty] = useState();
  const [bio, setBio] = useState("hh");

  useEffect(() => {
    if (profileInfo) {
      setBio(profileInfo.bio);
    }
  });

  // const onChange = e => {
  //   setValue(e);
  // };

  const config = {
    toolbar: [
      "bold",
      "italic",
      "bulletedList",
      "numberedList",
      "blockQuote",
      "link"
    ]
  };

  const onSubmit = () => {
    if (value) {
      setEmpty();
      const data = {
        bio: value
      };
      addBio(data, profile.id_);
    } else {
      setEmpty("Description obligatoire !");
    }
  };

  return (
    <>
      <div className='row'>
        <div className='col-md-12'>
          {errors ? <ShowErrors errors={errors} type={"danger"} /> : null}
          {empty ? <p className='alert alert-danger'>{empty}</p> : null}
          <CKEditor
            editor={ClassicEditor}
            data={profileInfo && profileInfo.bio ? profileInfo.bio : ""}
            onChange={(event, editor) => {
              const data = editor.getData();
              setValue(data);
            }}
            config={config}
          />

          <Button type='primary' onClick={onSubmit}>
            <i className='fa fa-edit'></i> Enregistrer les modifications
          </Button>
        </div>
      </div>
    </>
  );
};

Presentation.propTypes = { profile: PropTypes.object.isRequired };
const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { clear, addBio }
)(Presentation);
