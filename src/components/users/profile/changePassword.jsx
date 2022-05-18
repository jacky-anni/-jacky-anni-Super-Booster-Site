import React, { Fragment, useState, useEffect, useRef } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "yup-phone";
import { connect } from "react-redux";
import { clear, editPassword } from "./../../../actions/profileActions.";
import { useParams, useHistory } from "react-router-dom";
import { PropTypes } from "prop-types";
import { ToastMessage } from "./../../layout/tost";
import ShowErrors from "./../../layout/showErrors";
import { pays } from "./../../ultils/main";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { logout } from "./../../../actions/userActions";

const ChangePassword = ({
  profile: { errors, validate, editPasswordStatus, loading },
  user: { isAuthentificated },
  editPassword,
  logout,
  clear
}) => {
  const createForm = Yup.object().shape({
    currentPassword: Yup.string().required("Ce champ est obligatoire !"),
    password: Yup.string()
      .required("Ce champ est obligatoire !")
      .matches(
        /^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "plus de 8 caracteres, au moins une majuscule et un caraetre special"
      ),
    passwordConfirmation: Yup.string()
      .required("Ce champ est obligatoire !")
      .oneOf(
        [Yup.ref("password"), null],
        "Les mots de passe ne sont pas iddentiques"
      )
  });

  const [loading_, setLoading_] = useState(false);
  const { username } = useParams();
  const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;
  let history = useHistory();

  useEffect(() => {
    if (editPasswordStatus) {
      clear();
      logout();
      history.push("/");
    }
  });

  var initialValues = {};

  initialValues = {
    currentPassword: "",
    password: "",
    passwordConfirmation: ""
  };

  return (
    <>
      <div className='card card-custom gutter-b bg-white'>
        <div className='modal-body'>
          {errors ? <ShowErrors errors={errors} type={"danger"} /> : null}
          <Formik
            htmlFor='amazing'
            initialValues={initialValues}
            validationSchema={createForm}
            onSubmit={async values => {
              // same shape as initial values
              setLoading_(true);

              editPassword(values);
              setLoading_(false);
            }}
            enableReinitialize
          >
            {({ errors, touched, isValid }) => (
              <>
                {!loading ? (
                  <Form className='rounded-lg'>
                    <div className='row'>
                      <div className='col-md-12'>
                        <div className='form-group'>
                          <label>Mot de passe actuel</label>
                          <Field
                            type='password'
                            name='currentPassword'
                            class={`form-control  ${
                              errors.currentPassword && touched.currentPassword
                                ? "is-invalid"
                                : null
                            }`}
                            placeholder='Votre date de naissance'
                          />
                          {errors.currentPassword && touched.currentPassword ? (
                            <span className='text-danger form-text '>
                              {errors.currentPassword}
                            </span>
                          ) : null}
                        </div>
                      </div>

                      <div className='col-md-12'>
                        <div className='form-group'>
                          <label>Nouveau mot de passe</label>
                          <Field
                            type='password'
                            name='password'
                            class={`form-control  ${
                              errors.password && touched.password
                                ? "is-invalid"
                                : null
                            }`}
                            placeholder='Votre date de naissance'
                          />
                          {errors.password && touched.password ? (
                            <span className='text-danger form-text '>
                              {errors.password}
                            </span>
                          ) : null}
                        </div>
                      </div>

                      <div className='col-md-12'>
                        <div className='form-group'>
                          <label>Répéter le mot de passe</label>
                          <Field
                            type='password'
                            name='passwordConfirmation'
                            class={`form-control  ${
                              errors.passwordConfirmation &&
                              touched.passwordConfirmation
                                ? "is-invalid"
                                : null
                            }`}
                            placeholder='Votre date de naissance'
                          />
                          {errors.passwordConfirmation &&
                          touched.passwordConfirmation ? (
                            <span className='text-danger form-text '>
                              {errors.passwordConfirmation}
                            </span>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className='modal-footer'>
                      <button
                        type='submit'
                        disabled={loading_}
                        className={`btn btn-primary btn-square btn-lg  ${
                          loading_
                            ? "spinner spinner-darker-primary spinner-left"
                            : ""
                        }`}
                      >
                        <i className='fa fa-edit'></i> Changer
                      </button>
                    </div>
                  </Form>
                ) : (
                  <center>
                    <Spin indicator={antIcon} />
                  </center>
                )}
              </>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

ChangePassword.propTypes = {
  profile: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  user: state.user
});

export default connect(
  mapStateToProps,
  { clear, editPassword, logout }
)(ChangePassword);
