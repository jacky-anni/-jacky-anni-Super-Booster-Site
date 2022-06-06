import { Fragment, useEffect } from "react";
import Banner from "./profile/banner";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProfile, getInfoProfile } from "./../../actions/profileActions.";
import { useParams } from "react-router-dom";
import PageTitle from "./../partials/pageTile";
import Head from "./../partials/head";
import MenuLeftBar from "./profile/menuLeftBar";
import ProfileInformation from "./profile/profileInformation";
import InformationUser from "./profile/informationUser";
import NotAccess from "./../layout/notAccess";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Profile = ({
  profile: { errors, loading, profile, photo, profileInfo },
  getProfile,
  getImageProfile
}) => {
  const { username } = useParams();
  const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

  useEffect(() => {
    getProfile(username);
  }, []);

  return (
    <>
      <PageTitle title='Profile' />
      {!loading ? (
        <div className='row'>
          {!errors ? (
            <>
              <Banner />
              <MenuLeftBar username={username} />
              <InformationUser user={profile} />
            </>
          ) : (
            <NotAccess error={errors} />
          )}
        </div>
      ) : (
        <center>
          <Spin indicator={antIcon} />
        </center>
      )}
    </>
  );
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfile }
)(Profile);
