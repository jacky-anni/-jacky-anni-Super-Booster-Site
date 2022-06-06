import React, { Fragment, useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { createCourse, clear } from "./../../actions/coursesActions";
import { categoriesList } from "./../../actions/categoryActions";
import ShowErrors from "./../layout/showErrors";
import { ToastMessage } from "./../layout/tost";
import { Link, useHistory, useLocation } from "react-router-dom";
import { PropTypes } from "prop-types";
import NotAccess from "./../layout/notAccess";
import LoadingCharging from "./../layout/loadingCharging";
const queryString = require("query-string");

const BasicInformation = ({
  course: { errors, validate, course },
  category: { categories, loading },
  createCourse,
  categoriesList,
  creator,
  course_,
  clear
}) => {
  const createForm = Yup.object().shape({
    titre: Yup.string()
      .required("Ce champ est obligatoire !")
      .max(100, "La titre ne doit pas être inferieur à 100 caractère "),
    categorie: Yup.string().required("Ce champ est obligatoire !"),
    langue: Yup.string().required("Ce champ est obligatoire !"),
    visiblite: Yup.string().required("Ce champ est obligatoire !"),
    modalite: Yup.string().required("Ce champ est obligatoire !"),
    duree: Yup.string().required("Ce champ est obligatoire !"),
    note: Yup.number()
      .positive()
      .required("Entrer un nombre valide")
      .min(60, "La note ne doit pas être inferieur à 60")
      .max(100, "La note ne doit pas être supérieur à 100"),
    prix: Yup.number().positive()
    // date_fin: Yup.date("Entrer une date valide").max(
    //   Yup.ref("date_debut"),
    //   "La date de début ne doit pas être inferirur à la date de fin"
    // )
  });
  const [loading_, setLoading_] = useState(false);
  let history = useHistory();
  let location = useLocation();
  const parsed = queryString.parse(location.search);
  const courseLink = parsed.course;

  useEffect(() => {
    categoriesList();
    if (validate) {
      clear();
      setLoading_(false);
      history.push(location.pathname + "?step=2&course=" + course.id_);
    }

    if (errors) {
      setLoading_(false);
    }
  }, [validate]);

  var initialValues = {};

  if (course_ !== null && courseLink) {
    initialValues = {
      titre: course_.titre,
      categorie: course_.CategorieId,
      langue: course_.langue,
      visiblite: course_.visiblite,
      modalite: course_.type,
      duree: course_.duree,
      note: course_.note_passage,
      date_debut: course_.date_debut_cours,
      date_fin: course_.date_fin_cours,
      prix: course_.prix
    };
  } else {
    initialValues = {
      titre: "",
      categorie: "",
      langue: "",
      visiblite: "",
      modalite: "",
      duree: "",
      note: "",
      date_debut: "",
      date_fin: "",
      prix: ""
    };
  }

  return (
    <>
      {!loading ? (
        <div className='card card-custom gutter-b bg-white'>
          <div className='modal-body'>
            {errors && errors !== "404" ? (
              <ShowErrors errors={errors} type={"danger"} />
            ) : null}

            {errors && errors === "404" ? (
              <NotAccess error={"Cette formation n'existe pas"} />
            ) : (
              <Formik
                htmlFor='amazing'
                initialValues={initialValues}
                validationSchema={createForm}
                onSubmit={async values => {
                  // same shape as initial values
                  setLoading_(true);
                  createCourse(values, creator);
                }}
              >
                {({ errors, touched, isValid, values }) => (
                  <>
                    <Form className='rounded-lg'>
                      <div className='col-md-12'>
                        <div className='form-group'>
                          <label className=' font-weight-bolder'>
                            Titre de la formation
                          </label>
                          <Field
                            type='text'
                            name='titre'
                            className={`form-control  ${
                              errors.titre && touched.titre
                                ? "is-invalid"
                                : null
                            }`}
                            placeholder='Titre'
                          />

                          {errors.titre && touched.titre ? (
                            <span className='text-danger form-text '>
                              {errors.titre}
                            </span>
                          ) : null}
                        </div>
                      </div>

                      <div className='col-md-12'>
                        <div className='form-group'>
                          <label className='font-weight-bolder'>
                            Categorie
                          </label>
                          <Field
                            as='select'
                            className={`form-control  ${
                              errors.categorie && touched.categorie
                                ? "is-invalid"
                                : null
                            }`}
                            name='categorie'
                          >
                            <option value=''>Choisir une option</option>
                            {categories.map(categorie => (
                              <option key={categorie.id} value={categorie.id}>
                                {" "}
                                {categorie.nom}{" "}
                              </option>
                            ))}
                          </Field>

                          {errors.categorie && touched.categorie ? (
                            <span className='text-danger form-text '>
                              {errors.categorie}
                            </span>
                          ) : null}
                        </div>
                      </div>

                      <div className='col-md-12'>
                        <div className='form-group'>
                          <label className=' font-weight-bolder'>Langue</label>
                          <Field
                            type='text'
                            name='langue'
                            className={`form-control  ${
                              errors.langue && touched.langue
                                ? "is-invalid"
                                : null
                            }`}
                            placeholder='Francais, Creole'
                          />
                          {errors.langue && touched.langue ? (
                            <span className='text-danger form-text '>
                              {errors.langue}
                            </span>
                          ) : null}
                        </div>
                      </div>

                      <div className='col-md-12'>
                        <div className='form-group'>
                          <label className='font-weight-bolder'>
                            Visiblité
                          </label>
                          <Field
                            as='select'
                            className={`form-control  ${
                              errors.visiblite && touched.visiblite
                                ? "is-invalid"
                                : null
                            }`}
                            name='visiblite'
                          >
                            <option value='' className='text-muted"'>
                              Choisir une option
                            </option>
                            <option value='Public'>Public</option>
                            <option value='Limité'>Limité</option>
                          </Field>

                          {errors.visiblite && touched.visiblite ? (
                            <span className='text-danger form-text '>
                              {errors.visiblite}
                            </span>
                          ) : null}
                        </div>
                      </div>

                      <div className='col-md-12'>
                        <div className='form-group'>
                          <label className=' font-weight-bolder'>
                            Note de passage
                          </label>
                          <Field
                            type='number'
                            name='note'
                            className={`form-control  ${
                              errors.note && touched.note ? "is-invalid" : null
                            }`}
                            placeholder='Note de passage'
                          />

                          {errors.note && touched.note ? (
                            <span className='text-danger form-text '>
                              {errors.note}
                            </span>
                          ) : null}
                        </div>
                      </div>

                      <div className='col-md-12'>
                        <div className='form-group'>
                          <label className='font-weight-bolder'>Modalité</label>
                          <Field
                            as='select'
                            className={`form-control  ${
                              errors.modalite && touched.modalite
                                ? "is-invalid"
                                : null
                            }`}
                            name='modalite'
                          >
                            <option value='' className='text-muted"'>
                              Choisir une option
                            </option>
                            <option value='Gratuite'>Gratuite</option>
                            <option value='Payante'>Payante</option>
                            <option value='Certification payante'>
                              Certification payante
                            </option>
                          </Field>

                          {errors.modalite && touched.modalite ? (
                            <span className='text-danger form-text '>
                              {errors.modalite}
                            </span>
                          ) : null}
                        </div>
                      </div>

                      {values.modalite === "Payante" ? (
                        <div className='col-md-12'>
                          <div className='form-group'>
                            <label className='font-weight-bolder'>Prix</label>
                            <Field
                              type='number'
                              name='prix'
                              className={`form-control  ${
                                errors.prix && touched.prix
                                  ? "is-invalid"
                                  : null
                              }`}
                              placeholder='Prix de la formation'
                            />

                            {errors.prix && touched.prix ? (
                              <span className='text-danger form-text '>
                                {errors.prix}
                              </span>
                            ) : null}
                          </div>
                        </div>
                      ) : null}

                      <div className='col-md-12'>
                        <div className='form-group'>
                          <label className='font-weight-bolder'>Durée</label>
                          <Field
                            as='select'
                            className={`form-control  ${
                              errors.duree && touched.duree
                                ? "is-invalid"
                                : null
                            }`}
                            name='duree'
                          >
                            <option value='' className='text-muted"'>
                              Choisir une option
                            </option>
                            <option value='Indeterminée'>Indeterminée</option>
                            <option value='Périodique'>Périodique</option>
                          </Field>

                          {errors.duree && touched.duree ? (
                            <span className='text-danger form-text '>
                              {errors.duree}
                            </span>
                          ) : null}
                        </div>
                      </div>

                      {values.duree === "Périodique" ? (
                        <div className='col-md-12'>
                          <div className='row'>
                            <div className='col-md-12'>
                              <div className='form-group'>
                                <label className=' font-weight-bolder'>
                                  Date début de la formation
                                </label>
                                <Field
                                  type='date'
                                  name='date_debut'
                                  className={`form-control  ${
                                    errors.date_debut && touched.date_debut
                                      ? "is-invalid"
                                      : null
                                  }`}
                                />
                                {errors.date_debut && touched.date_debut ? (
                                  <span className='text-danger form-text '>
                                    {errors.date_debut}
                                  </span>
                                ) : null}
                              </div>
                            </div>
                            <div className='col-md-12'>
                              <div className='form-group'>
                                <label className=' font-weight-bolder'>
                                  Date de fin de la formation
                                </label>
                                <Field
                                  type='date'
                                  name='date_fin'
                                  className={`form-control  ${
                                    errors.date_fin && touched.date_fin
                                      ? "is-invalid"
                                      : null
                                  }`}
                                />
                                {errors.date_fin && touched.date_fin ? (
                                  <span className='text-danger form-text '>
                                    {errors.date_fin}
                                  </span>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : null}

                      <div className='modal-footer'>
                        <button
                          type='submit'
                          disabled={(loading_, !isValid)}
                          className={`btn btn-primary  btn-md  ${
                            loading_
                              ? "spinner spinner-darker-primary  spinner-left"
                              : ""
                          }`}
                        >
                          <b>
                            {course_ && courseLink ? "Modifier " : "Continuer "}
                            <i className='fa fa-arrow-right'></i>
                          </b>
                        </button>
                      </div>
                    </Form>
                  </>
                )}
              </Formik>
            )}
          </div>
        </div>
      ) : (
        <LoadingCharging />
      )}
    </>
  );
};

BasicInformation.propTypes = {
  course: PropTypes.object.isRequired,
  category: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  course: state.course,
  category: state.category
});

export default connect(
  mapStateToProps,
  { createCourse, categoriesList, clear }
)(BasicInformation);
