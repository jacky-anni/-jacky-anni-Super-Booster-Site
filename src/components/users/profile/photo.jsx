import React, { useState, useEffect } from "react";
import { Upload, Button } from "antd";
import ImgCrop from "antd-img-crop";
import { UploadOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { changePhoto } from "./../../../actions/profileActions.";
import { useParams } from "react-router-dom";
import { Spin } from "antd";

const Photo = ({ profile: { loading, photo }, changePhoto, getImage }) => {
  const { username } = useParams(); // useEffect(async () => {}, []);

  const onChange = info => {
    // setFileList(newFileList);
    if (info.file.status == "done") {
      changePhoto(info.file.response, true);
    } else {
      changePhoto(info.file.response, false);
    }
  };

  return (
    <ImgCrop rotate>
      <Upload
        action='/api/admin/change-photo'
        name={"photo"}
        onChange={onChange}
        accept='image/*'
        onPreview={false}
        onRemove={true}
      >
        <Button icon={<UploadOutlined />}>Changer.....</Button>
      </Upload>
    </ImgCrop>
  );
};

Photo.propTypes = { profile: PropTypes.object.isRequired };
const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { changePhoto }
)(Photo);
