import { Modal, Button, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { disable } from "./../../actions/userActions";
import PropTypes from "prop-types";

const Disable = ({ user: { loading }, user_, disable }) => {
  const { confirm } = Modal;

  function showConfirm() {
    confirm({
      title: "Voulez vraiment désactiver ce compte ?",
      icon: <ExclamationCircleOutlined />,
      content: user_.nom + "  " + user_.prenom,
      onOk() {
        disable(user_);
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
          className='btn btn-md btn-square btn-warning text-lowercase font-weight-bolder mr-2'
        >
          <b>
            <i className='fa fa-user-alt-slash'></i>
          </b>
        </a>
        {/* <Button onClick={showConfirm}>Confirm</Button> */}
      </Space>
    </>
  );
};

Disable.propTypes = { user: PropTypes.object.isRequired };
const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { disable }
)(Disable);
