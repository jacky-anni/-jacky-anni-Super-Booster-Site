import React, { Fragment, useState, useEffect } from "react";
import { Modal, Button } from "antd";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { editUser, clear } from "./../../actions/userActions";
import ShowErrors from "./../layout/showErrors";
import { ToastMessage } from "./../layout/tost";
import { PropTypes } from "prop-types";

const EditUser = ({
  user: { errors, loading, validate },
  user_,
  editUser,
  clear
}) => {
  const createForm = Yup.object().shape({
    prenom: Yup.string().required("Ce champ est obligatoire !"),
    nom: Yup.string().required("Ce champ est obligatoire !"),
    email: Yup.string()
      .required("Ce champ est obligatoire !")
      .email("Cet email n'est pas valide !"),
    type: Yup.string().required("Ce champ est obligatoire !"),
    role: Yup.string().required("Ce champ est obligatoire !"),
    droit: Yup.string().required("Ce champ est obligatoire !")
  });

  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [loading_, setLoading_] = useState(false);

  useEffect(() => {
    if (validate) {
      clear();
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
    setVisible(false);
  };

  const form = (
    <>
      <div className='modal-body'>
        {errors ? <ShowErrors errors={errors} type={"danger"} /> : null}

        <Formik
          initialValues={{
            prenom: user_.prenom,
            nom: user_.nom,
            email: user_.email,
            type: user_.type,
            role: user_.role,
            droit: user_.droit
          }}
          validationSchema={createForm}
          onSubmit={async values => {
            // same shape as initial values
            setLoading_(true);
            editUser(values, user_.id);
          }}
        >
          {({ errors, touched, isValid }) => (
            <>
              <Form className='rounded-lg'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>Prenom</label>
                      <Field
                        type='text'
                        name='prenom'
                        class='form-control'
                        placeholder='Prenom'
                      />

                      {errors.prenom && touched.prenom ? (
                        <span className='text-danger form-text '>
                          {errors.prenom}
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>Nom</label>
                      <Field
                        type='text'
                        name='nom'
                        class='form-control'
                        placeholder='Nom'
                      />

                      {errors.nom && touched.nom ? (
                        <span className='text-danger form-text '>
                          {errors.nom}
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>Adress Email</label>
                      <Field
                        type='email'
                        name='email'
                        class='form-control'
                        placeholder='Email'
                      />

                      {errors.email && touched.email ? (
                        <span className='text-danger form-text '>
                          {errors.email}
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>Type</label>
                      <Field as='select' className='form-control' name='type'>
                        <option value=''>Choisir une option</option>
                        <option value='Basique'>Basique</option>
                        <option value='Intermédiaire'>Intermédiaire</option>
                        <option value='Avancé'>Avancé</option>
                      </Field>

                      {errors.type && touched.type ? (
                        <span className='text-danger form-text '>
                          {errors.type}
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>Role</label>
                      <Field as='select' className='form-control' name='role'>
                        <option value=''>Choisir une option</option>
                        <option value='Etudiant'>Etudiant - e</option>
                        <option value='Formateur'>Formateur - trice</option>
                        <option value='Responsable'>Responsable</option>
                      </Field>

                      {errors.role && touched.role ? (
                        <span className='text-danger form-text '>
                          {errors.role}
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>Droit</label>
                      <Field as='select' className='form-control' name='droit'>
                        <option value=''>Choisir une option</option>
                        <option value='Utilisateur'>Utilisateur</option>
                        <option value='Administrateur'>Administrateur</option>
                      </Field>

                      {errors.droit && touched.droit ? (
                        <span className='text-danger form-text '>
                          {errors.droit}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className='modal-footer'>
                  <button
                    type='submit'
                    disabled={loading_}
                    className={`btn btn-outline-primary btn-lg  ${
                      loading_
                        ? "spinner spinner-darker-primary  spinner-left"
                        : ""
                    }`}
                  >
                    <i className='fa fa-edit'></i> Modifier
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
      <a
        onClick={showModal}
        className='btn btn-md btn-square btn-dark text-lowercase font-weight-bolder mr-2'
      >
        <b>
          <i className='fa fa-edit'></i>
        </b>
      </a>

      <Modal
        title={`Modifier cet utilisateur`}
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

EditUser.propTypes = { profile: PropTypes.object.isRequired };
const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { editUser, clear }
)(EditUser);
