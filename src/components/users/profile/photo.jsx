import React, { useState, useEffect } from "react";
import { Upload, Button } from "antd";
import ImgCrop from "antd-img-crop";
import { UploadOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { changePhoto, getImage } from "./../../../actions/profileActions.";
import { useParams } from "react-router-dom";
import { Spin } from "antd";

const Photo = ({ profile: { loading, photo }, changePhoto, getImage }) => {
  const { username } = useParams();
  const [fileList, setFileList] = useState({});

  useEffect(async () => {
    getImage("1.png");
  }, []);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    changePhoto(newFileList);
  };

  // const onPreview = async file => {
  //   let src = file.url;
  //   if (!src) {
  //     src = await new Promise(resolve => {
  //       const reader = new FileReader();
  //       reader.readAsDataURL(file.originFileObj);
  //       reader.onload = () => resolve(reader.result);
  //     });
  //   }
  //   const image = new Image();
  //   image.src = src;
  //   const imgWindow = window.open(src);
  //   imgWindow.document.write(image.outerHTML);
  // };

  return (
    <ImgCrop rotate>
      <Upload
        action='/api/admin/change-photo'
        // listType='picture-card'
        // fileList={fileList}
        name={"photo"}
        onChange={onChange}
      >
        {loading ? (
          <Spin />
        ) : (
          <img src={`http://localhost:6000/${photo}`} alt='' />
        )}
        ssssss
        <Button icon={<UploadOutlined />}>Changer</Button>
        {console.log(photo)}
        {/* {fileList.length < 1 && "+ Upload"} */}
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
  { changePhoto, getImage }
)(Photo);
