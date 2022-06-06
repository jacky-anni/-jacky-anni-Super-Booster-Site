import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import { Formik, Form, Field, FormikActions } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import ShowErrors from "./../layout/showErrors";
import { ToastMessage } from "./../layout/tost";

import { PropTypes } from "prop-types";
import { addCategory, clear } from "./../../actions/categoryActions";

const CreateCategory = ({
  category: { errors, loading, categorie, validate },
  addCategory,
  clear
}) => {
  const createForm = Yup.object().shape({
    nom: Yup.string()
      .required("Ce champ est obligatoire !")
      .max(50, "Taille limite 50 caracteres"),
    description: Yup.string()
      .required("Ce champ est obligatoire !")
      .max(100, "Taille limite 50 caracteres")
  });

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [loading_, setLoading_] = useState(false);

  const [initialValues, setInitialValues] = useState({
    nom: "",
    description: ""
  });

  useEffect(() => {
    if (validate) {
      clear();
      setInitialValues({
        nom: "",
        description: ""
      });
      setLoading_(false);
      setVisible(false);
    }

    if (errors) {
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
      nom: "",
      description: ""
    });
    setVisible(false);
  };

  const form = (
    <>
      <div className='modal-body'>
        {errors ? <ShowErrors errors={errors} type={"danger"} /> : null}

        <Formik
          enableReinitialize={true} // changes here
          validateOnMount={true}
          validationSchema={createForm}
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => {
            // same shape as initial values
            setLoading_(true);
            setInitialValues({
              nom: values.nom,
              description: values.description
            });
            addCategory(values);
            resetForm();
          }}
        >
          {({ errors, touched, isValid }) => (
            <>
              <Form className='rounded-lg'>
                <div className='row'>
                  <div className='col-md-12'>
                    <div className='form-group'>
                      <label className=' font-weight-bold '>
                        Nom du categorie
                      </label>
                      <Field
                        type='text'
                        name='nom'
                        class='form-control'
                        placeholder='Nom du categorie'
                        maxLength={51}
                      />

                      {errors.nom && touched.nom ? (
                        <span className='text-danger form-text '>
                          {errors.nom}
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <div className='col-md-12'>
                    <div className='form-group'>
                      <label className=' font-weight-bold '>
                        Desction du categorie
                      </label>
                      <Field
                        as='textarea'
                        type='text'
                        name='description'
                        class='form-control'
                        placeholder='Decription'
                      />

                      {errors.description && touched.description ? (
                        <span className='text-danger form-text '>
                          {errors.description}
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
          <i className='fa fa-plus text-truncate '></i> Ajouter Categorie
        </b>
      </Button>

      <Modal
        title='Ajouter un catégorie'
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

CreateCategory.propTypes = { category: PropTypes.object.isRequired };
const mapStateToProps = state => ({
  category: state.category
});

export default connect(
  mapStateToProps,
  { addCategory, clear }
)(CreateCategory);
