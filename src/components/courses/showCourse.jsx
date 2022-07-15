import BannerCourse from "./bannerCourse";
import CourseDetail from "./courseDetail";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { getCourse, clear } from "../../actions/coursesActions";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Loader from "./../layout/loader";
import LoadingCharging from "./../layout/loadingCharging";
import { Skeleton } from "antd";
import Banner from "./../layout/banner";
import NotAccess from "./../layout/notAccess";

const ShowCourse = ({
  course: { courses, loadingCourse, course, errorsCourse },
  getCourse,
  clear
}) => {
  const { courseLink } = useParams();
  useEffect(() => {
    clear();
    getCourse(courseLink);
  }, []);

  return (
    <>
      {!loadingCourse ? (
        <>
          {course && !errorsCourse ? (
            <>
              <BannerCourse course={course} />
              <CourseDetail course={course} />
            </>
          ) : (
            <NotAccess error={"Cette formation n'existe pas"} />
          )}
        </>
      ) : (
        <>
          <BannerCourse course={course} loading={true} /> <br />
          <LoadingCharging
            type={"spinningBubbles"}
            text={"Cours en train de charger..."}
          />
        </>
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
