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

const ShowCourse = ({
  course: { errors, loading, course, author, validate },
  profile: { profile, photo },
  getProfile,

  getImageProfile,
  getCourse
}) => {
  const { courseLink } = useParams();
  const [check, setCheck] = useState();

  useEffect(() => {
    getCourse(courseLink);
    setCheck(false);
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
                <CourseBanner
                  course={course.formation}
                  profile_={course.utilisateur}
                />
                <div className='row'>
                  <div className='col-md-4'>
                    <div className='row'>
                      <div className='col-md-4'>
                        <Photo />
                      </div>

                      <div className='col-md-8'>
                        <h1>sssksskssk</h1>
                      </div>
                    </div>
                    <MenuLeftBar />
                  </div>

                  <div className='col-md-8'>
                    <ShowAllDescription
                      course_={course.formation}
                      profile_={course.utilisateur}
                    />
                  </div>
                </div>
              </>
            ) : (
              <LoadingCharging />
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
  course: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  course: state.course,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfile, getCourse, getImageProfile }
)(ShowCourse);
