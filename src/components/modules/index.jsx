import PageTitle from "./../partials/pageTile";
import { connect } from "react-redux";
import { getCourse } from "./../../actions/coursesActions";
import { modulesList } from "./../../actions/modulesActions";
import { PropTypes } from "prop-types";
import { useEffect, useState, useLayoutEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import NotAccess from "./../layout/notAccess";
import LoadingCharging from "./../layout/loadingCharging";
import Loader from "./../layout/loader";
import CourseBanner from "./../courses/courseBanner";
import ModulesList from "./modulesList";
import { Button, Spin } from "antd";
import { Link } from "react-router-dom";
import CreateModule from "./createModule";

const ModulesHome = ({
  course: { errors, loading, course },
  module: { modules },
  getCourse,
  modulesList
}) => {
  const { courseLink } = useParams();
  const [moduleList, setModuleList] = useState();

  useEffect(() => {
    getCourse(courseLink);
    modulesList(courseLink);
  }, []);

  return (
    <>
      {loading ? <Loader /> : null}
      <PageTitle title='Modules' />
      <>
        {!errors ? (
          <>
            {course ? <CourseBanner course={course} /> : <Loader />}

            <div className='row'>
              <div className='card card-custom'>
                <div className='card-header'>
                  <div className='card-title'>
                    <span className='card-icon'>
                      <i className='flaticon2-file text-primary' />
                    </span>
                    <h6 className='card-label font-weight-bolder'>
                      {modules && modules.length > 1
                        ? modules.length + " Modules"
                        : modules && modules.length == 1
                        ? modules.length + " Module"
                        : "0 Module"}
                    </h6>
                  </div>

                  <div className='card-toolbar'>
                    <CreateModule />
                  </div>
                </div>
              </div>

              <div className='col-md-12' style={{ backgroundColor: "#e8eff5" }}>
                <br />
                {modules && course ? (
                  <>
                    {modules.map(module => (
                      <ModulesList modules={module} course={course} />
                    ))}
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

ModulesHome.propTypes = {
  course: PropTypes.object.isRequired,
  module: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  course: state.course,
  module: state.module
});

export default connect(
  mapStateToProps,
  { getCourse, modulesList }
)(ModulesHome);
