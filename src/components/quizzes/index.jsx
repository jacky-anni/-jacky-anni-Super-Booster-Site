import PageTitle from "./../partials/pageTile";
import { connect } from "react-redux";
import { getCourse } from "./../../actions/coursesActions";
import { modulesList } from "./../../actions/modulesActions";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import NotAccess from "./../layout/notAccess";
import LoadingCharging from "./../layout/loadingCharging";
import Loader from "./../layout/loader";
import CourseBanner from "./../courses/courseBanner";
import { Button, Spin } from "antd";
import { Link } from "react-router-dom";
import CreateQuiz from "./createQuiz";
import { quizList } from "../../actions/quizzesActions";
import QuizItemList from "./quizItemList";

const QuizHome = ({
  course: { errors, loading, course },
  module: { modules, module, loadingModule },
  quiz: { errorsQuiz, loadingQuiz, quiz, quizzes, validateQuiz },
  getCourse,
  quizList
}) => {
  const { courseLink } = useParams();
  const { moduleLink } = useParams();

  useEffect(() => {
    getCourse(courseLink);
    quizList(courseLink, moduleLink);
  }, []);

  return (
    <>
      {loading ? <Loader /> : null}
      <PageTitle title='Quiz' />
      <>
        {!errors ? (
          <>
            {course ? <CourseBanner course={course} /> : <Loader />}

            <div className='row'>
              <div className='card card-custom'>
                <div className='card-header'>
                  <div className='card-title'>
                    <span className='card-icon'>
                      <i className='flaticon2-help text-primary' />
                    </span>
                    <h6 className='card-label font-weight-bolder'>
                      {quizzes ? quizzes.length : null} Quiz
                    </h6>
                  </div>

                  <div className='card-toolbar'>
                    <CreateQuiz course={course} module={module} />
                  </div>
                </div>
              </div>

              {!loadingQuiz ? (
                <>
                  {!errorsQuiz ? (
                    <div
                      className='col-md-8'
                      style={{ backgroundColor: "#e8eff5" }}
                    >
                      {quizzes.map(quiz => (
                        <QuizItemList quiz={quiz} />
                      ))}
                    </div>
                  ) : (
                    <NotAccess error={errorsQuiz} />
                  )}
                </>
              ) : (
                <LoadingCharging />
              )}

              <div className='col-md-4'>wwwww</div>
            </div>
          </>
        ) : (
          <NotAccess error={"Cette formation n'existe pas"} />
        )}
      </>
    </>
  );
};

QuizHome.propTypes = {
  course: PropTypes.object.isRequired,
  module: PropTypes.object.isRequired,
  quiz: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  course: state.course,
  module: state.module,
  quiz: state.quiz
});

export default connect(
  mapStateToProps,
  { getCourse, quizList }
)(QuizHome);
