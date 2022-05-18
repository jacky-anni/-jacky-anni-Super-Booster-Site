import React, { Fragment, useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { addPassword } from "./../../actions/userActions";
import ShowErrors from "./../layout/showErrors";
import { useHistory, Redirect, Link, useParams } from "react-router-dom";
import Loader from "./../layout/loader";

const AddPassword = ({
  user: { loading, errors, user, add_password },
  addPassword
}) => {
  const loginForm = Yup.object().shape({
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

  const history = useHistory();

  useEffect(() => {
    if (add_password) {
      history.push("/add-password");
    }
  });

  return (
    <>
      <div className='pb-5 pb-lg-15 mt-17'>
        <h3 className='font-weight-bolder text-dark font-size-h2 font-size-h1-lg'>
          {console.log(user)}
          Ajouter un mot passe
        </h3>
      </div>
      <div className=''>
        {errors ? <ShowErrors errors={errors} type={"danger"} /> : null}

        <div className=''>
          <Formik
            initialValues={{
              code: ""
            }}
            validationSchema={loginForm}
            onSubmit={async values => {
              // same shape as initial values
              // validateEmail(id, values);
              let token = localStorage.getItem("tokenValidation");

              const data = {
                password: values.password,
                passwordConfirmation: values.passwordConfirmation,
                token: token
              };

              // envoie les donnees
              addPassword(data);
            }}
          >
            {({ errors, touched, isValid }) => (
              <Form>
                <div className='form-group'>
                  <label className='font-size-h6 font-weight-bolder text-dark'>
                    Entrer un mot de passe
                  </label>
                  <Field
                    name='password'
                    type='password'
                    placeholder='ntrer un mot de passe '
                    required
                    className='form-control form-control-solid h-auto p-6 rounded-lg bg-white'
                  />
                  {errors.password && touched.password ? (
                    <div className='text-danger'>{errors.password}</div>
                  ) : null}
                </div>

                <div className='form-group'>
                  <label className='font-size-h6 font-weight-bolder text-dark'>
                    Répéter le mot de passe
                  </label>
                  <Field
                    name='passwordConfirmation'
                    type='password'
                    placeholder='Répéter le mot de passe'
                    required
                    className='form-control form-control-solid h-auto p-6 rounded-lg bg-white'
                  />
                  {errors.passwordConfirmation &&
                  touched.passwordConfirmation ? (
                    <div className='text-danger'>
                      {errors.passwordConfirmation}
                    </div>
                  ) : null}
                </div>
                {/* <Loader /> */}

                <div className='pb-lg-0 pb-5'>
                  <button
                    type='submit'
                    disabled={!isValid}
                    className='btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3'
                  >
                    Ajouter
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {/*=========================================================================================*/}
    </>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { addPassword }
)(AddPassword);
