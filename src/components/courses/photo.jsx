import React, { useState, useEffect } from "react";
import { Upload, Button } from "antd";
import ImgCrop from "antd-img-crop";
import { UploadOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Avatar, message, Spin } from "antd";
import { PictureOutlined } from "@ant-design/icons";
import { changePhoto, clear } from "./../../actions/coursesActions";
import LinearProgress from "@mui/material/LinearProgress";

const Photo = ({ course: { loading, photo }, changePhoto, course_ }) => {
  const [loading_, setLoading_] = useState(false);
  const [img, setImg] = useState();

  useEffect(async () => {
    // if (course_.photo !== null) {
    //   const data = await fetch(`/images/courses/${course_.photo}`);
    //   setImg(data.url);
    // }

    if (photo) {
      clear();
      setLoading_(false);
    }
  }, [photo]);

  const onChange = info => {
    if (info.file.status !== "uploading") {
      setLoading_(true);
    }
    if (info.file.status === "done") {
      // message.success(`${info.file.name} file uploaded successfully`);
      changePhoto(info.file.response, true, course_.id);
    } else if (info.file.status === "error") {
      changePhoto(info.file.response, false, course_.id);
      // message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <>
      <div className='card-body' style={{ backgroundColor: "#ffffff" }}>
        <div className='d-flex'>
          <div className='flex-shrink-0 mr-3'>
            <center>
              <div className='symbol symbol-120 symbol-lg-120'>
                <div className='col-md-12 mb-2'>
                  <Avatar
                    shape='square'
                    size={120}
                    icon={<PictureOutlined />}
                    src={photo}
                  />
                </div>
                <ImgCrop rotate>
                  <Upload
                    action='/api/admin/formation/change-photo'
                    name={"photo"}
                    onChange={onChange}
                    accept='image/*'
                    onPreview={false}
                    onRemove={true}
                    showUploadList={false}
                  >
                    {loading_ ? (
                      <>
                        <LinearProgress color='success' />
                        <Button type='primary' loading disabled>
                          Chargement...
                        </Button>
                      </>
                    ) : (
                      <Button type='primary'>
                        <b>
                          {" "}
                          <i className='fa fa-upload'></i> Changer.....
                        </b>
                      </Button>
                    )}
                  </Upload>
                </ImgCrop>
              </div>
            </center>
          </div>

          <div className='flex-grow-1'>
            <div className='d-flex align-items-center flex-wrap justify-content-between'>
              <div className='flex-grow-1 font-weight-bold text-dark-50 py-2 py-lg-2 mr-5'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
                <br />
                Quis autem vel eum iure reprehenderit qui in.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Photo.propTypes = { course: PropTypes.object.isRequired };
const mapStateToProps = state => ({
  course: state.course
});
export default connect(
  mapStateToProps,
  { changePhoto, clear }
)(Photo);
