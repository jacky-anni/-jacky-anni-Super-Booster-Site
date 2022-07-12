import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { coursesList } from "./../../actions/coursesActions";
import { useEffect } from "react";
import CourseItemListCarousel from "./courseItemListCarousel";
import LoadingCharging from "./../layout/loadingCharging";

const CoursesCarousel = ({
  course: { courses, loadingCourse, filtered },
  coursesList
}) => {
  useEffect(() => {
    coursesList();
  }, []);

  return (
    <>
      <section className='gray min-sec'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-5 col-md-6 col-sm-12'>
              <div className='sec-heading center'>
                <p>Hot &amp; Trending</p>
                <h2>
                  <span className='theme-cl'>Recent</span> Courses by
                  professional Instructor
                </h2>
              </div>
            </div>
          </div>
          <div className='row'>
            {courses ? (
              courses.map(course => (
                <CourseItemListCarousel course={course} key={course.id} />
              ))
            ) : (
              <LoadingCharging />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

CoursesCarousel.propTypes = { course: PropTypes.object.isRequired };
const mapStateToProps = state => ({
  course: state.course
});

export default connect(
  mapStateToProps,
  { coursesList }
)(CoursesCarousel);
