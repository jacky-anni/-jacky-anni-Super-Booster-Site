import PageTitle from "./../partials/pageTile";
import { connect } from "react-redux";
import { getCourse } from "./../../actions/coursesActions";
import { getProfile, getImageProfile } from "./../../actions/profileActions.";
import { PropTypes } from "prop-types";
import { useEffect, useState, useLayoutEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import CourseBanner from "./courseBanner";
import MenuLeftBar from "./menuLeftBar";
import NotAccess from "./../layout/notAccess";
import ShowAllDescription from "./showAllDescription";
import LoadingCharging from "./../layout/loadingCharging";
import Loader from "./../layout/loader";
import Photo from "./photo";

const ShowCourse = ({ course: { errors, loading, course }, getCourse }) => {
  const { courseLink } = useParams();

  useEffect(() => {
    getCourse(courseLink);
  }, []);

  return (
    <>
      {loading ? <Loader /> : null}
      <PageTitle title='Formation' />

      <>
        {!errors ? (
          <>
            {course ? (
              <>
                <CourseBanner course={course} />
                <div className='row'>
                  <div className='col-md-4'>
                    <div className='row'>
                      <Photo course_={course} />
                    </div>
                    <MenuLeftBar course_={course} />
                  </div>

                  <div className='col-md-8'>
                    <ShowAllDescription course_={course} />
                  </div>
                </div>
              </>
            ) : (
              <Loader />
            )}
          </>
        ) : (
          <NotAccess error={"Cette formation n'existe pas"} />
        )}
      </>
    </>
  );
};

ShowCourse.propTypes = {
  course: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  course: state.course
});

export default connect(
  mapStateToProps,
  { getCourse }
)(ShowCourse);
