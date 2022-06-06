import { Modal, Button, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { active } from "./../../actions/coursesActions";

const ActiveCourse = ({ course: { loading }, course_, active }) => {
  const { confirm } = Modal;

  function showConfirm() {
    confirm({
      title: "Voulez vraiment activer ce cours ?",
      icon: <ExclamationCircleOutlined />,
      content: course_.titre,
      onOk() {
        active(course_);
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  }

  return (
    <>
      <Space wrap>
        <a onClick={showConfirm} className='dropdown-item font-weight-bolder'>
          <i className='fa fa-eye'></i> &nbsp; Mettre en ligne
        </a>
      </Space>
    </>
  );
};

ActiveCourse.propTypes = { course: PropTypes.object.isRequired };
const mapStateToProps = state => ({
  course: state.course
});

export default connect(
  mapStateToProps,
  { active }
)(ActiveCourse);
