import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import { Formik, Form, Field, FormikActions } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import ShowErrors from "./../layout/showErrors";
import { ToastMessage } from "./../layout/tost";
import { PropTypes } from "prop-types";
import { useParams } from "react-router-dom";
import { addQuiz, clear } from "../../actions/quizzesActions";

const CreateQuiz = ({
  quiz: { errorsQuiz, loadingQuiz, quiz, validateQuiz },
  addQuiz,
  clear
}) => {
  const createForm = Yup.object().shape({
    nom: Yup.string()
      .required("Ce champ est obligatoire !")
      .max(120, "Taille limite 50 caracteres")
  });

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [loading_, setLoading_] = useState(false);
  const { courseLink } = useParams();
  const { moduleLink } = useParams();

  const [initialValues, setInitialValues] = useState({
    nom: ""
  });

  useEffect(() => {
    if (validateQuiz) {
      clear();
      setInitialValues({
        nom: ""
      });
      setLoading_(false);
      setVisible(false);
    }
    if (errorsQuiz) {
      setLoading_(false);
    }
  });

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
    setConfirmLoading(false);
  };

  const handleCancel = () => {
    clear();
    setInitialValues({
      nom: ""
    });
    setVisible(false);
  };

  const form = (
    <>
      <div className='modal-body'>
        {errorsQuiz ? <ShowErrors errors={errorsQuiz} type={"danger"} /> : null}

        <Formik
          enableReinitialize={true} // changes here
          validateQuizOnMount={true}
          validationSchema={createForm}
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => {
            // same shape as initial values
            setLoading_(true);
            setInitialValues({
              nom: values.nom
            });
            addQuiz(values, courseLink, moduleLink);

            resetForm();
          }}
        >
          {({ errors, touched, isValid }) => (
            <>
              <Form className='rounded-lg'>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='form-group'>
                      <label className=' font-weight-bold '>Nom du quz</label>
                      <Field
                        type='text'
                        name='nom'
                        class='form-control'
                        placeholder='Nom du quiz'
                        maxLength={121}
                      />

                      {errors.nom && touched.nom ? (
                        <span className='text-danger form-text '>
                          {errors.nom}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className='modal-footer'>
                  <button
                    type='submit'
                    disabled={loading_}
                    className={`btn btn-primary btn-md  ${
                      loading_
                        ? "spinner spinner-darker-primary  spinner-left"
                        : ""
                    }`}
                  >
                    <b>{loading_ ? " Chargement..." : " Ajouter"}</b>
                  </button>
                </div>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </>
  );

  return (
    <>
      <Button type='primary' onClick={showModal}>
        <b>
          <i className='fa fa-plus text-truncate '></i> Ajouter un quiz
        </b>
      </Button>

      <Modal
        title='Ajouter un quiz'
        visible={visible}
        style={{ top: 20 }}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={700}
        footer={false}
        maskClosable={false}
      >
        {form}
      </Modal>
    </>
  );
};

CreateQuiz.propTypes = { quiz: PropTypes.object.isRequired };
const mapStateToProps = state => ({
  quiz: state.quiz
});

export default connect(
  mapStateToProps,
  { addQuiz, clear }
)(CreateQuiz);
