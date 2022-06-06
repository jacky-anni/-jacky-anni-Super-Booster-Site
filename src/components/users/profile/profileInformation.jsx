import React, { Fragment, useState, useEffect, useRef } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "yup-phone";
import { connect } from "react-redux";
import {
  getInfoProfile,
  clear,
  createProfile
} from "./../../../actions/profileActions.";
import { useParams } from "react-router-dom";
import { PropTypes } from "prop-types";
import { ToastMessage } from "./../../layout/tost";
import ShowErrors from "./../../layout/showErrors";
import { pays } from "./../../ultils/main";
import LoadingCharging from "./../../layout/loadingCharging";

const ProfileInformation = ({
  profile: { errors, validate, profile, loading, profileInfo },
  createProfile,
  getInfoProfile,
  clear
}) => {
  const createForm = Yup.object().shape({
    sexe: Yup.string().required("Ce champ est obligatoire !"),
    naissance: Yup.string().required("Ce champ est obligatoire !"),
    email: Yup.string()
      .required("Ce champ est obligatoire !")
      .email("Cet email n'est pas valide !"),
    pays: Yup.string().required("Ce champ est obligatoire !"),
    ville: Yup.string().required("Ce champ est obligatoire !"),
    adresse: Yup.string().required("Ce champ est obligatoire !"),
    niveau: Yup.string().required("Ce champ est obligatoire !"),
    occupation: Yup.string().required("Ce champ est obligatoire !"),
    // telephone: Yup.string().required("Ce champ est obligatoire !")
    telephone: Yup.string()
      .phone("Le numero te telephone est invalide")
      .required("Ce champ est obligatoire !")
  });

  const [loading_, setLoading_] = useState(false);
  const { username } = useParams();
  const [pays_, setPays_] = useState([]);

  useEffect(async () => {
    getInfoProfile(username);
    const pay = await pays();
    setPays_(pay);

    if (validate) {
      console.log("YES");
      clear();
      setLoading_(false);
    } else {
      console.log("NO");
    }
  }, []);

  var initialValues = {};

  if (profileInfo !== null) {
    initialValues = {
      sexe: profileInfo.sexe,
      naissance: profileInfo.date_naissance,
      email: profileInfo.email_pro,
      pays: profileInfo.pays,
      ville: profileInfo.ville,
      adresse: profileInfo.adresse,
      niveau: profileInfo.niveau_etude,
      occupation: profileInfo.occupation,
      telephone: profileInfo.tlf_pro
    };
  } else {
    initialValues = {
      sexe: "",
      naissance: "",
      email: "",
      pays: "",
      ville: "",
      adresse: "",
      niveau: "",
      occupation: "",
      telephone: ""
    };
  }

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
              // setLoading_(true);
              createProfile(values, profile.id_);
            }}
            enableReinitialize
          >
            {({ errors, touched, isValid }) => (
              <>
                {!loading ? (
                  <Form className='rounded-lg'>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='form-group'>
                          <label>Sexe</label>
                          <Field
                            as='select'
                            className={`form-control  ${
                              errors.sexe && touched.sexe ? "is-invalid" : null
                            }`}
                            name='sexe'
                          >
                            <option value=''>Choisir une option</option>
                            <option value='Mascullin'>Mascullin</option>
                            <option value='Féminin'>Féminin</option>
                          </Field>
                          {errors.sexe && touched.sexe ? (
                            <span className='text-danger form-text '>
                              {errors.sexe}
                            </span>
                          ) : null}
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group'>
                          <label>Date de naissance</label>
                          <Field
                            type='date'
                            name='naissance'
                            className={`form-control ${
                              errors.naissance && touched.naissance
                                ? "is-invalid"
                                : null
                            }`}
                            placeholder='Votre date de naissance'
                          />
                          {errors.naissance && touched.naissance ? (
                            <span className='text-danger form-text '>
                              {errors.naissance}
                            </span>
                          ) : null}
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group'>
                          <label>Pays</label>
                          <Field
                            as='select'
                            name='pays'
                            className={`form-control  ${
                              errors.pays && touched.pays ? "is-invalid" : null
                            }`}
                          >
                            <option value=''>Choisir un pays</option>

                            {pays_.map(pays => (
                              <option key={pays.code} value={pays.nom}>
                                {" "}
                                {pays.nom}{" "}
                              </option>
                            ))}
                          </Field>

                          {errors.pays && touched.pays ? (
                            <span className='text-danger form-text '>
                              {errors.pays}
                            </span>
                          ) : null}
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group'>
                          <label>Ville</label>
                          <Field
                            type='text'
                            name='ville'
                            className={`form-control  ${
                              errors.ville && touched.ville
                                ? "is-invalid"
                                : null
                            }`}
                            placeholder='ville'
                          />

                          {errors.ville && touched.ville ? (
                            <span className='text-danger form-text '>
                              {errors.ville}
                            </span>
                          ) : null}
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group'>
                          <label>Adresse</label>
                          <Field
                            type='text'
                            name='adresse'
                            className={`form-control  ${
                              errors.adresse && touched.adresse
                                ? "is-invalid"
                                : null
                            }`}
                            placeholder='#10, Route Nationale #1, Pipo Ville, Cap-Haitien, Haiti'
                          />

                          {errors.adresse && touched.adresse ? (
                            <span className='text-danger form-text '>
                              {errors.adresse}
                            </span>
                          ) : null}
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group'>
                          <label>Niveau d'étude</label>
                          <Field
                            type='text'
                            name='niveau'
                            className={`form-control  ${
                              errors.niveau && touched.niveau
                                ? "is-invalid"
                                : null
                            }`}
                            placeholder='#10, Route Nationale #1, Pipo Ville, Cap-Haitien, Haiti'
                          />

                          {errors.niveau && touched.niveau ? (
                            <span className='text-danger form-text '>
                              {errors.niveau}
                            </span>
                          ) : null}
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group'>
                          <label>Occupation</label>
                          <Field
                            type='text'
                            name='occupation'
                            className={`form-control  ${
                              errors.occupation && touched.occupation
                                ? "is-invalid"
                                : null
                            }`}
                            placeholder='web developper'
                          />

                          {errors.occupation && touched.occupation ? (
                            <span className='text-danger form-text '>
                              {errors.occupation}
                            </span>
                          ) : null}
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='form-group'>
                          <label>Téléphone</label>
                          <Field
                            type='text'
                            name='telephone'
                            className={`form-control  ${
                              errors.telephone && touched.telephone
                                ? "is-invalid"
                                : null
                            }`}
                            placeholder='3330-1524'
                          />

                          {errors.telephone && touched.telephone ? (
                            <span className='text-danger form-text '>
                              {errors.telephone}
                            </span>
                          ) : null}
                        </div>
                      </div>
                      <div className='col-md-12'>
                        <div className='form-group'>
                          <label>Email proféssionel</label>
                          <Field
                            type='email'
                            name='email'
                            className={`form-control  ${
                              errors.email && touched.email
                                ? "is-invalid"
                                : null
                            }`}
                            placeholder='Adresse email'
                          />

                          {errors.email && touched.email ? (
                            <span className='text-danger form-text '>
                              {errors.email}
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
                        <i className='fa fa-edit'></i> Modifier
                      </button>
                    </div>
                  </Form>
                ) : (
                  <LoadingCharging />
                )}
              </>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

ProfileInformation.propTypes = { profile: PropTypes.object.isRequired };
const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getInfoProfile, clear, createProfile }
)(ProfileInformation);
