import React, { Fragment, useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { validateEmail } from "./../../actions/userActions";
import ShowErrors from "./../layout/showErrors";
import { useHistory, Redirect, Link, useParams } from "react-router-dom";
import Loader from "./../layout/loader";

const ValidateEmail = ({
  user: { loading, errors, user, validate },
  validateEmail
}) => {
  const loginForm = Yup.object().shape({
    code: Yup.number("Le code doit etre un entier")
      .required("Code invalide")
      .positive("Code invalide")
      .integer("Code invalide")
  });

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (validate) {
      history.push("/add-password");
    }
  });

  return (
    <>
      <div className='pb-5 pb-lg-15 mt-17'>
        <h3 className='font-weight-bolder text-dark font-size-h2 font-size-h1-lg'>
          Validation adresse email
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
            onSubmit={(values, { resetForm }) => {
              // same shape as initial values
              validateEmail(id, values);
              resetForm();
            }}
          >
            {({ errors, touched, isValid }) => (
              <Form>
                <div className='form-group'>
                  <label className='font-size-h6 font-weight-bolder text-dark'>
                    Code de sécurité
                  </label>
                  <Field
                    name='code'
                    type='number'
                    placeholder='Entrer le code sécurité (6 chiffres)'
                    required
                    className='form-control form-control-solid h-auto p-6 rounded-lg bg-white'
                  />
                  {errors.code && touched.code ? (
                    <div className='text-danger'>{errors.code}</div>
                  ) : null}
                </div>
                {/* <Loader /> */}

                <div className='pb-lg-0 pb-5'>
                  <button
                    type='submit'
                    disabled={!isValid}
                    className='btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3'
                  >
                    Confirmer
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
  { validateEmail }
)(ValidateEmail);
