import React, { Fragment, useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { login } from "./../../actions/userActions";
import ShowErrors from "./../layout/showErrors";
import { useHistory, Redirect } from "react-router-dom";

const Login = ({ user: { isAuthentificated, errors }, login }) => {
  const loginForm = Yup.object().shape({
    email: Yup.string()
      .email("Entrer un email valide")
      .required("Ce champ est obligatoire !"),
    password: Yup.string().required("Ce champ est obligatoire !")
  });

  const link = "/";

  useEffect(() => {
    if (isAuthentificated) {
      window.location.replace("/");
    }
  });

  return (
    <>
      <br /> <br /> <br /> <br /> <br />
      <br />
      <br />
      <div className='login-body d-flex  align-items-stretch justify-content-center'>
        <div className=''>
          <div className='col-md-12 d-flex align-items-center'>
            {/*begin::Signin*/}
            <div className='login-form login-signin'>
              {errors ? <ShowErrors errors={errors} type={"danger"} /> : null}
              {/*begin::Form*/}

              {console.log(errors)}
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
                    <Form className='form w-xxl-550px rounded-lg'>
                      <div className='form-group'>
                        <label className='font-size-h6 font-weight-bolder text-dark'>
                          Email
                        </label>
                        <Field
                          name='email'
                          type='email'
                          required
                          className='form-control form-control-solid h-auto p-6 rounded-lg'
                        />
                        {errors.email && touched.email ? (
                          <div className='text-danger'>{errors.email}</div>
                        ) : null}
                      </div>

                      <div className='form-group'>
                        <label className='font-size-h6 font-weight-bolder text-dark'>
                          Password
                        </label>
                        <Field
                          name='password'
                          type='password'
                          required
                          className='form-control form-control-solid h-auto p-6 rounded-lg'
                        />
                        {errors.password && touched.password ? (
                          <div className='text-danger '>{errors.password}</div>
                        ) : null}
                      </div>

                      <div className='pb-lg-0 pb-5'>
                        <button
                          type='submit'
                          disabled={!isValid}
                          className='btn btn-primary font-weight-bolder btn-block font-size-h6 px-8 py-4 my-3 mr-3'
                        >
                          Connexion
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
