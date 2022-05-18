import { Modal, Button, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { active } from "./../../actions/userActions";
import PropTypes from "prop-types";

const Active = ({ user: { loading }, user_, active }) => {
  const { confirm } = Modal;

  function showConfirm() {
    confirm({
      title: "Voulez vraiment activer ce compte ?",
      icon: <ExclamationCircleOutlined />,
      content: user_.nom + "  " + user_.prenom,
      onOk() {
        active(user_);
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
          className='btn btn-md btn-square btn-success font-weight-bolder mr-2'
        >
          <b>
            <i className='fa fa-user-check'></i>
          </b>
        </a>
        {/* <Button onClick={showConfirm}>Confirm</Button> */}
      </Space>
    </>
  );
};

Active.propTypes = { user: PropTypes.object.isRequired };
const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { active }
)(Active);
