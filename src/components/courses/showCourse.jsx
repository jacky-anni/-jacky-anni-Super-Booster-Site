import BannerCourse from "./bannerCourse";
import CourseDetail from "./courseDetail";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getCourse, clear } from "../../actions/coursesActions";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Loader from "./../layout/loader";
import LoadingCharging from "./../layout/loadingCharging";

const ShowCourse = ({
  course: { courses, loadingCourse, course, errorsCourse },
  getCourse,
  clear
}) => {
  const { courseLink } = useParams();
  useEffect(() => {
    getCourse(courseLink);
  }, []);

  return (
    <>
      {!loadingCourse ? (
        <>
          {!errorsCourse ? (
            <>
              <BannerCourse course={course} />
              <CourseDetail course={course} />
            </>
          ) : (
            <h2>Erreur</h2>
          )}
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

ShowCourse.propTypes = { course: PropTypes.object.isRequired };
const mapStateToProps = state => ({
  course: state.course
});

export default connect(
  mapStateToProps,
  { getCourse, clear }
)(ShowCourse);
