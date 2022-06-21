import PageTitle from "./../partials/pageTile";
import { connect } from "react-redux";
import { getCourse } from "./../../actions/coursesActions";
import { getModule } from "./../../actions/modulesActions";
import { PropTypes } from "prop-types";
import { useEffect, useState, useLayoutEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import NotAccess from "./../layout/notAccess";
import LoadingCharging from "./../layout/loadingCharging";
import Loader from "./../layout/loader";
import CourseBanner from "./../courses/courseBanner";

import { Button, Spin } from "antd";
import { Link } from "react-router-dom";
import CreateModule from "./createModule";

const ShowModule = ({
  course: { errors, loading, course },
  module: { modules, module, loadingModule },
  getCourse,
  getModule
}) => {
  const { courseLink } = useParams();
  const { moduleLink } = useParams();
  const [moduleList, setModuleList] = useState();

  useEffect(() => {
    getCourse(courseLink);
    getModule(courseLink, moduleLink);

    console.log(module);
  }, []);

  return (
    <>
      {loading && loadingModule ? <Loader /> : null}
      <PageTitle title='Module' />
      <>
        {!errors ? (
          <>
            {course ? <CourseBanner course={course} /> : <Loader />}

            <div className='row'>
              {!loadingModule ? (
                <div className='card card-custom'>
                  {module && !loadingModule ? (
                    <>
                      <div className='card-header'>
                        <div className='card-title'>
                          <span className='card-icon'>
                            <i className='flaticon2-file text-primary' />
                          </span>
                          <h6 className='card-label font-weight-bolder'>
                            {module.titre}
                          </h6>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className='alert alert-danger  font-weight-bolder'>
                      Module introuvable
                    </div>
                  )}
                </div>
              ) : (
                <Loader />
              )}
              <div className='col-md-12' style={{ backgroundColor: "#e8eff5" }}>
                <br />
                {!loading && !loadingModule ? (
                  <>
                    <Link to={`/quizzes/${courseLink}/${moduleLink}`}>
                      <h1>Quiz</h1>
                    </Link>
                  </>
                ) : (
                  <LoadingCharging />
                )}
              </div>
            </div>
          </>
        ) : (
          <NotAccess error={"Cette formation n'existe pas"} />
        )}
      </>
    </>
  );
};

ShowModule.propTypes = {
  course: PropTypes.object.isRequired,
  module: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  course: state.course,
  module: state.module
});

export default connect(
  mapStateToProps,
  { getCourse, getModule }
)(ShowModule);
