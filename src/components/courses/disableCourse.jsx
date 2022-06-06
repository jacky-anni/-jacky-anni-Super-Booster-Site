import { Modal, Button, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { disable } from "./../../actions/coursesActions";

const DisableCourse = ({ course: { loading }, course_, disable }) => {
  const { confirm } = Modal;

  function showConfirm() {
    confirm({
      title: "Voulez vraiment desactiver ce cours ?",
      icon: <ExclamationCircleOutlined />,
      content: course_.titre,
      onOk() {
        disable(course_);
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
          <i className='fa fa-eye'></i> &nbsp; Desactiver
        </a>
      </Space>
    </>
  );
};

DisableCourse.propTypes = { course: PropTypes.object.isRequired };
const mapStateToProps = state => ({
  course: state.course
});

export default connect(
  mapStateToProps,
  { disable }
)(DisableCourse);
