import PageTitle from "./../partials/pageTile";
import Courses from "./courses";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { getUser } from "./../../actions/userActions";
import { connect } from "react-redux";
import { useEffect } from "react";
import { PropTypes } from "prop-types";

const CoursesHome = ({ user: { loading, user }, getUser }) => {
  return (
    <>
      <PageTitle title='Formations' />

      <div className='card card-custom'>
        <div className='card-header'>
          <div className='card-title'>
            <span className='card-icon'>
              <i className='flaticon2-file text-primary' />
            </span>
            <h6 className='card-label'>Formations</h6>
          </div>
          {user && user.role == "Responsable" ? (
            <div className='card-toolbar'>
              <Link to={`/dashboard/course/create/${user.username}`}>
                <Button type='primary'>
                  <b>
                    <i className='fa fa-plus'></i> Ajouter une formation
                  </b>
                </Button>
              </Link>
            </div>
          ) : null}
        </div>
        <div className='card-body'>
          <div className='row' />
          <Courses />
          {/*end: Datatable*/}
        </div>
      </div>
    </>
  );
};

CoursesHome.propTypes = { user: PropTypes.object.isRequired };
const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { getUser }
)(CoursesHome);
