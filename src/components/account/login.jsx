import React, { Fragment, useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "./../../actions/userActions";
import ShowErrors from "./../layout/showErrors";
import { useHistory, Redirect, Link } from "react-router-dom";

const Login = ({ user: { isAuthentificated, errors }, login }) => {
  const loginForm = Yup.object().shape({
    email: Yup.string()
      .email("Entrer un email valide")
      .required("Ce champ est obligatoire !"),
    password: Yup.string().required("Ce champ est obligatoire !")
  });

  let history = useHistory();

  useEffect(() => {
    if (isAuthentificated) {
      // window.location.replace("/dashboard");
      history.push("/dashboard");
    }
  });

  return (
    <>
      <div className='pb-5 pb-lg-15 mt-17'>
        <h3 className='font-weight-bolder text-dark font-size-h2 font-size-h1-lg'>
          Connexion
        </h3>
        {/* <div className='text-muted font-weight-bold font-size-h4'>
          New Here?
          <a href='signup.html' className='text-primary font-weight-bolder'>
            Create Account
          </a>
        </div> */}
      </div>
      <div className=''>
        {errors ? <ShowErrors errors={errors} type={"danger"} /> : null}

        <div className=''>
          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            validationSchema={loginForm}
            onSubmit={async values => {
              // same shape as initial values
              login(values);
            }}
          >
            {({ errors, touched, isValid }) => (
              <Form>
                <div className='form-group'>
                  <label className='font-size-h6 font-weight-bolder text-dark'>
                    Votre email
                  </label>
                  <Field
                    name='email'
                    type='email'
                    placeholder='Entrer votre email'
                    required
                    className='form-control form-control-solid h-auto p-6 rounded-lg bg-white'
                    className={`form-control form-control-solid h-auto p-6 rounded-lg bg-white  ${
                      errors.email && touched.email ? "is-invalid" : null
                    }`}
                  />
                  {errors.email && touched.email ? (
                    <div className='text-danger'>{errors.email}</div>
                  ) : null}
                </div>

                <div className='form-group'>
                  <label className='font-size-h6 font-weight-bolder text-dark'>
                    Votre mot de passe
                  </label>
                  <Field
                    name='password'
                    type='password'
                    placeholder='Entrer votre mot de passe'
                    required
                    className={`form-control form-control-solid h-auto p-6 rounded-lg bg-white ${
                      errors.password && touched.password ? "is-invalid" : null
                    }`}
                  />
                  {errors.password && touched.password ? (
                    <div className='text-danger '>{errors.password}</div>
                  ) : null}{" "}
                  <hr />
                  <Link
                    to='/change-password'
                    // style={{ float: "right" }}

                    class='text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5'
                  >
                    <center>Mot de passe oublié ?</center>
                  </Link>
                  <hr />
                </div>

                <div className='pb-lg-0 pb-5'>
                  <button
                    type='submit'
                    disabled={!isValid}
                    className='btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3'
                  >
                    Connexion
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

Login.propTypes = { profile: PropTypes.object.isRequired };
const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
