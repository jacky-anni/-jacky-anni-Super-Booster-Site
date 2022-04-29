import { Fragment, useEffect } from "react";
import Banner from "./profile/banner";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { authCheck } from "./../ultils/authCheck";
import { getProfile } from "./../../actions/profileActions.";
import { useParams } from "react-router-dom";
import PageTitle from "./../partials/pageTile";
import Head from "./../partials/head";

const Profile = ({ profile: { loading, profile }, getProfile }) => {
  const { username } = useParams();
  authCheck();
  useEffect(() => {
    getProfile(username);
  }, []);
  return (
    <>
      <Head />
      <PageTitle title='Profile' />
      <div className='row'>
        <div className='col-md-12'>
          {!loading ? <Banner profile={profile} /> : null}
        </div>
      </div>
    </>
  );
};

Profile.propTypes = { profile: PropTypes.object.isRequired };
const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfile }
)(Profile);
