import { Modal, Button, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { deleteQuiz, clear } from "../../actions/quizzesActions";

const DeleteQuiz = ({
  quiz: { errorsQuiz, loadingQuiz, quiz, editQuizValidate },
  deleteQuiz,
  clear,
  quiz_
}) => {
  const { confirm } = Modal;
  const { courseLink } = useParams();
  const { moduleLink } = useParams();

  function showDeleteConfirm() {
    confirm({
      title: "Voulez-vous vraiment supprimé ?",
      icon: <ExclamationCircleOutlined />,
      content: quiz_.nom,
      okText: "Oui",
      okType: "danger",
      cancelText: "Non",
      onOk() {
        deleteQuiz(quiz_.id, courseLink);
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

DeleteQuiz.propTypes = { module: PropTypes.object.isRequired };
const mapStateToProps = state => ({
  quiz: state.quiz
});

export default connect(
  mapStateToProps,
  { deleteQuiz }
)(DeleteQuiz);
