import { Modal, Button, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteModule } from "./../../actions/modulesActions";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const DeleteModule = ({
  module: { loading, modules },
  module_,
  deleteModule
}) => {
  const { confirm } = Modal;
  const { courseLink } = useParams();

  function showDeleteConfirm() {
    confirm({
      title: "Voulez-vous vraiment supprimé ?",
      icon: <ExclamationCircleOutlined />,
      content: module_.titre,
      okText: "Oui",
      okType: "danger",
      cancelText: "Non",
      onOk() {
        deleteModule(courseLink, module_.id);
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  }

  return (
    <>
      <Button
        className='mr-2 alert alert-danger font-weight-bolder'
        onClick={showDeleteConfirm}
      >
        <i className='fa fa-trash'></i>&nbsp; Supp.
      </Button>
    </>
  );
};

DeleteModule.propTypes = { module: PropTypes.object.isRequired };
const mapStateToProps = state => ({
  module: state.module
});

export default connect(
  mapStateToProps,
  { deleteModule }
)(DeleteModule);
