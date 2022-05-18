import { Modal, Button, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteUser } from "./../../actions/userActions";
import PropTypes from "prop-types";

const Delete = ({ user: { loading }, user_, deleteUser }) => {
  const { confirm } = Modal;

  function showDeleteConfirm() {
    confirm({
      title: "Voulez-vous vraiment supprimé ?",
      icon: <ExclamationCircleOutlined />,
      content: user_.nom + "  " + user_.prenom,
      okText: "Oui",
      okType: "danger",
      cancelText: "Non",
      onOk() {
        deleteUser(user_);
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
          onClick={showDeleteConfirm}
          className='btn btn-md btn-square btn-danger text-lowercase font-weight-bolder mr-2'
        >
          <b>
            <i className='fa fa-trash'></i>
          </b>
        </a>
        {/* <Button onClick={showConfirm}>Confirm</Button> */}
      </Space>
    </>
  );
};

Delete.propTypes = { user: PropTypes.object.isRequired };
const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { deleteUser }
)(Delete);
