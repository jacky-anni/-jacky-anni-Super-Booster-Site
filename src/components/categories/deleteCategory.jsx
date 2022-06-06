import { Modal, Button, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteCategory } from "./../../actions/categoryActions";
import PropTypes from "prop-types";

const DeleteCategory = ({
  category: { loading },
  category_,
  deleteCategory
}) => {
  const { confirm } = Modal;

  function showDeleteConfirm() {
    confirm({
      title: "Voulez-vous vraiment supprimé ?",
      icon: <ExclamationCircleOutlined />,
      content: category_.nom,
      okText: "Oui",
      okType: "danger",
      cancelText: "Non",
      onOk() {
        deleteCategory(category_.id_);
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

DeleteCategory.propTypes = { category: PropTypes.object.isRequired };
const mapStateToProps = state => ({
  category: state.category
});

export default connect(
  mapStateToProps,
  { deleteCategory }
)(DeleteCategory);
