import React, { Fragment, useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { addUser, getUser, clear } from "./../../actions/userActions";
import ShowErrors from "./../layout/showErrors";
import { ToastMessage } from "./../layout/tost";
import cookie from "react-cookies";
import CreateUserConfirmation from "./createUserConfirmation";
import { Link, useHistory, Redirect } from "react-router-dom";
import { Spin } from "antd";
import { PropTypes } from "prop-types";
import PageTitle from "./../partials/pageTile";
import Head from "./../partials/head";
import LoadingCharging from "./../layout/loadingCharging";

const CreateUser = ({
  user: { errors, validate, loading, user_, user },
  addUser,
  getUser,
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
    droit: Yup.string().required("Ce champ est obligatoire !"),

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
  let history = useHistory();
  useEffect(() => {
    if (validate) {
      clear();
      setLoading_(true);
      history.push("/dashboard/users");
    }

    if (errors) {
      setLoading_(false);
    }
  });

  return (
    <>
      <Head />
      <PageTitle title='Ajouter utilisateur' />
      <div className='card card-custom gutter-b bg-white'>
        {!loading ? (
          <div className='modal-body'>
            {errors ? <ShowErrors errors={errors} type={"danger"} /> : null}
            <Formik
              initialValues={{
                prenom: "",
                nom: "",
                email: "",
                type: "",
                role: "",
                droit: "",
                password: "",
                passwordConfirmation: ""
              }}
              validationSchema={createForm}
              onSubmit={async values => {
                // same shape as initial values
                setLoading_(true);
                addUser(values);
                // setTimeout(() => {
                //   addUser(values);
                // }, 2000);
                //
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
                          <Field
                            as='select'
                            className='form-control'
                            name='type'
                          >
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
                          <Field
                            as='select'
                            className='form-control'
                            name='role'
                          >
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
                          <Field
                            as='select'
                            className='form-control'
                            name='droit'
                          >
                            <option value=''>Choisir une option</option>
                            <option value='Utilisateur'>Utilisateur</option>
                            <option value='Administrateur'>
                              Administrateur
                            </option>
                          </Field>

                          {errors.droit && touched.droit ? (
                            <span className='text-danger form-text '>
                              {errors.droit}
                            </span>
                          ) : null}
                        </div>
                      </div>

                      <div className='col-md-6'>
                        <div className='form-group'>
                          <label>Mot de passe</label>
                          <Field
                            type='password'
                            name='password'
                            class='form-control'
                            placeholder='Mot de passe'
                          />

                          {errors.password && touched.password ? (
                            <span className='text-danger form-text '>
                              {errors.password}
                            </span>
                          ) : null}
                        </div>
                      </div>

                      <div className='col-md-6'>
                        <div className='form-group'>
                          <label>Confirmer le mot de passe</label>
                          <Field
                            type='password'
                            name='passwordConfirmation'
                            class='form-control'
                            placeholder='Confirmer le mot de passe'
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
                        className={`btn btn-outline-primary btn-lg  ${
                          loading_
                            ? "spinner spinner-darker-primary  spinner-left"
                            : ""
                        }`}
                      >
                        Ajouter <i className='fa fa-plus'></i>
                      </button>
                    </div>
                  </Form>
                </>
              )}
            </Formik>
          </div>
        ) : null}
      </div>
    </>
  );
};

CreateUser.propTypes = { user: PropTypes.object.isRequired };
const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { addUser, getUser, clear }
)(CreateUser);
