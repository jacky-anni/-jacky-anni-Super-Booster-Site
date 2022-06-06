import { Modal, Button, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { deleteCourse } from "./../../actions/coursesActions";

const DeleteCourse = ({ course: { loading }, course_, deleteCourse }) => {
  const { confirm } = Modal;

  function showConfirm() {
    confirm({
      title: "Voulez vraiment supprimer ce cours ?",
      icon: <ExclamationCircleOutlined />,
      content: course_.titre,
      onOk() {
        deleteCourse(course_);
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  }

  return (
    <>
      <Space wrap>
        <a
          onClick={showConfirm}
          className='dropdown-item font-weight-bolder text-danger'
        >
          <i className='fa fa-trash'></i> &nbsp; Supprimer
        </a>
      </Space>
    </>
  );
};

DeleteCourse.propTypes = { course: PropTypes.object.isRequired };
const mapStateToProps = state => ({
  course: state.course
});

export default connect(
  mapStateToProps,
  { deleteCourse }
)(DeleteCourse);
