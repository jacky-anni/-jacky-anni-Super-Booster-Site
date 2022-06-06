import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { Formik, Form, Field, FormikActions } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import ShowErrors from "./../layout/showErrors";
import { ToastMessage } from "./../layout/tost";
import { PropTypes } from "prop-types";
import { editCategory, clear } from "./../../actions/categoryActions";

const EditCategory = ({
  category: { errors, loading, edit },
  categorie_,
  editCategory,
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
    nom: categorie_.nom,
    description: categorie_.description
  });

  useEffect(() => {
    if (edit) {
      clear();
      setVisible(false);
      setLoading_(false);
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
          onSubmit={values => {
            // same shape as initial values
            setLoading_(true);
            editCategory(values, categorie_.id_);
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
                    <b>
                      <b>{loading_ ? " Chargement..." : " Modifier"}</b>
                    </b>
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
      <buttom onClick={showModal} className='btn btn-primary mr-1'>
        <i className='fa fa-edit'></i>
      </buttom>

      <Modal
        title='Modifier ce catégorie'
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

EditCategory.propTypes = { category: PropTypes.object.isRequired };
const mapStateToProps = state => ({
  category: state.category
});

export default connect(
  mapStateToProps,
  { editCategory, clear }
)(EditCategory);
