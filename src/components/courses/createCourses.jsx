import { useEffect, useState } from "react";
import PageTitle from "./../partials/pageTile";
import { useLocation, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { createCourse, getCourse } from "./../../actions/coursesActions";
import { PropTypes } from "prop-types";
import BasicInformation from "./basicInformation";
import CourseCreator from "./courseCreator";
import { getProfile, getImageProfile } from "./../../actions/profileActions.";
import NotAccess from "./../layout/notAccess";
import Description from "./descriptions";
import LoadingCharging from "./../layout/loadingCharging";
import Loader from "./../layout/loader";

const CreateCourse = ({
  course: { loading, course, validate },
  profile: { errors, profile, photo },
  getProfile,
  getImageProfile,
  getCourse
}) => {
  const searchParams = useLocation();
  const step = new URLSearchParams(searchParams.search).get("step");
  const courseLink = new URLSearchParams(searchParams.search).get("course");
  const [course_, setCourse_] = useState("No");

  const { username } = useParams();
  useEffect(() => {
    getProfile(username);
    getImageProfile(username);

    if (courseLink) {
      getCourse(courseLink);
    }
  }, []);

  return (
    <>
      <PageTitle title='Ajouter une formation' />

      {!errors ? (
        <>
          {profile ? (
            <div className='col-md-12'>
              <div className='card card-custom'>
                {profile && profile.role == "Responsable" ? (
                  <>
                    {course ? (
                      <CourseCreator
                        profile={profile}
                        photo={photo}
                        course_={course}
                      />
                    ) : (
                      <CourseCreator
                        profile={profile}
                        photo={photo}
                        course_={null}
                      />
                    )}
                    <div className='card-header card-header-tabs-line'>
                      <div className='card-toolbar'>
                        <ul className='nav nav-tabs nav-bold nav-tabs-line'>
                          <li className='nav-item'>
                            <span
                              style={{ cursor: "pointer" }}
                              className={`nav-link ${
                                step == 1 || step == null ? "active" : null
                              }`}
                              data-toggle='tab'
                              href='#kt_tab_pane_1_4'
                            >
                              <span class='label label-primary mr-2 font-weight-bolder '>
                                1
                              </span>
                              <span className='nav-text text-black '>
                                Informations de bases
                              </span>
                            </span>
                          </li>

                          <li className='nav-item'>
                            <span
                              style={{ cursor: "pointer" }}
                              className={`nav-link ${
                                step == 2 ? "active" : null
                              }`}
                              data-toggle='tab'
                              href='#kt_tab_pane_2_4'
                            >
                              <span class='label label-primary mr-2 font-weight-bolder '>
                                2
                              </span>
                              <span className='nav-text text-black'>
                                Descriptions
                              </span>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className='card-body'>
                      <div className='tab-content'>
                        <div
                          className={`tab-pane fade ${
                            step == 1 || step == null ? "show active" : null
                          }`}
                          id='kt_tab_pane_1_4'
                          role='tabpanel'
                          aria-labelledby='kt_tab_pane_1_4'
                        >
                          {course ? (
                            <BasicInformation
                              creator={profile.id_}
                              course_={course}
                            />
                          ) : (
                            <BasicInformation
                              creator={profile.id_}
                              course_={null}
                            />
                          )}
                        </div>

                        <div
                          className={`tab-pane fade ${
                            step == 2 ? "show active" : null
                          }`}
                          id='kt_tab_pane_2_4'
                          role='tabpanel'
                          aria-labelledby='kt_tab_pane_2_4'
                        >
                          {course ? (
                            <Description course_={course} />
                          ) : (
                            <Description course_={null} />
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className='col-md-12'>
                    {/*begin::Engage Widget 1*/}
                    <div className='card card-custom gutter-b'>
                      <div className='card-body d-flex align-items-center py-5 py-lg-10'>
                        <div className>
                          <h3 className='pb-1 text-dark-75 font-weight-bolder text-danger font-size-h5'>
                            <i className='flaticon2-delete text-danger'></i>
                            Vous ne puvez pas voir cette formation
                          </h3>
                        </div>
                        {/*end::Description*/}
                      </div>
                    </div>
                    {/*end::Engage Widget 1*/}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Loader />
          )}
        </>
      ) : (
        <NotAccess error={errors} />
      )}
    </>
  );
};

CreateCourse.propTypes = {
  course: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  course: state.course,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { createCourse, getProfile, getCourse, getImageProfile }
)(CreateCourse);
