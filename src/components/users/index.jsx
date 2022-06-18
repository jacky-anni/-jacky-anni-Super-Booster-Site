import { Fragment, useEffect, useState, useRef } from "react";
import Users from "./users";
import { connect } from "react-redux";
import PageTitle from "./../partials/pageTile";
import Head from "./../partials/head";
import CreateUser from "./create";
import { Modal, Button } from "antd";
import { Link, useLocation } from "react-router-dom";
import { getUser } from "./../../actions/userActions";
import { PropTypes } from "prop-types";
import NotAccess from "./../layout/notAccess";
import Loader from "./../layout/loader";

const UserHome = ({ user: { loading, user } }) => {
  useEffect(async () => {
    await getUser();
  }, [user]);

  return (
    <>
      {loading ? <Loader /> : null}
      <Head />
      <PageTitle title='Utilisateurs' />
      <div className='card card-custom'>
        <div className='card-header flex-wrap border-0 pt-6 pb-0'>
          <div className='card-title'>
            <h3 className='card-label'>
              Spanish Translation
              <span className='d-block text-muted pt-2 font-size-sm'>
                Language translations for the texts and messages
              </span>
            </h3>
          </div>
          <div className='card-toolbar'>
            {user && user.droit == "Administrateur" ? (
              <Link to='/dashboard/users/create'>
                <Button type='primary'>
                  <b>
                    {" "}
                    <i className='fa fa-plus'></i> Ajouter un utilisateur
                  </b>
                </Button>
              </Link>
            ) : null}
          </div>
        </div>
        <div className='card-body'>
          <div className='row' />
          <Users />
          {/*end: Datatable*/}
        </div>
      </div>
    </>
  );
};

UserHome.propTypes = {
  user: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { getUser }
)(UserHome);
