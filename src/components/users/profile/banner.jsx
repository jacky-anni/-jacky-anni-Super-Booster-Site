import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./photo";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { Avatar, Skeleton, Spin } from "antd";
import { UserOutlined } from "@ant-design/icons";
import {
  getProfile,
  getImageProfile
} from "./../../../actions/profileActions.";
import PropTypes from "prop-types";
import { getUser } from "./../../../actions/userActions";
import NotAccess from "./../../layout/notAccess";

const Banner = ({
  profile: { errors, loading, profile, photo },
  user: { user },
  getProfile,
  getImageProfile,
  getUser
}) => {
  //yyyy
  const { username } = useParams();
  useEffect(() => {
    getProfile(username);
    getImageProfile(username);
    getUser();
  }, []);

  const loading_ = (
    <>
      <Skeleton active />
    </>
  );

  return (
    <>
      {loading ? (
        loading_
      ) : (
        <div className='card card-custodm'>
          {!errors ? (
            <div className='card-body' style={{ backgroundColor: "#ffffff" }}>
              <div className='d-flex'>
                <div className='flex-shrink-0 mr-3'>
                  <center>
                    <div className='symbol symbol-120 symbol-lg-120'>
                      <div className='col-md-12 mb-2'>
                        {!photo ? (
                          <Avatar
                            shape='square'
                            size={112}
                            icon={<UserOutlined />}
                          />
                        ) : (
                          <Avatar
                            src={photo}
                            shape='square'
                            size={112}
                            icon={<UserOutlined />}
                          />
                        )}
                      </div>
                      {user && user.id == profile.id ? <Photo /> : null}
                    </div>
                  </center>
                </div>

                <div className='flex-grow-1'>
                  <div className='d-flex align-items-center justify-content-between flex-wrap mt-2'>
                    <div className='mr-3'>
                      <a
                        href='#'
                        className='d-flex align-items-center text-dark text-hover-primary font-size-h5 font-weight-bold mr-3'
                      >
                        {profile.prenom} {profile.nom}
                      </a>
                      <div className='d-flex flex-wrap my-2'>
                        <span className='text-muted text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2'>
                          <i className='fa fa-envelope'></i>&nbsp;
                          {profile.email}
                        </span>
                        <a
                          href='#'
                          className='text-muted text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2'
                        >
                          <i className='fa fa-address-card'></i>&nbsp;{" "}
                          {profile.role}
                        </a>
                        <span className='text-muted text-hover-primary font-weight-bold'>
                          <i className='fa fa-user'></i> {profile.droit}
                        </span>
                      </div>
                    </div>
                    <div className='my-lg-0 my-1'>
                      <span className='btn btn-sm btn-light-primary font-weight-bolder mr-2'>
                        Contact
                      </span>
                      <span className='btn btn-sm btn-primary font-weight-bolder'>
                        Hire me
                      </span>
                    </div>
                  </div>
                  <div className='d-flex align-items-center flex-wrap justify-content-between'>
                    <div className='flex-grow-1 font-weight-bold text-dark-50 py-2 py-lg-2 mr-5'>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem.
                      <br />
                      Quis autem vel eum iure reprehenderit qui in.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <NotAccess errror={"erreur"} />
          )}
        </div>
      )}
    </>
  );
};

Banner.propTypes = {
  profile: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile,
  user: state.user
});

export default connect(
  mapStateToProps,
  {
    getProfile,
    getImageProfile,
    getUser
  }
)(Banner);
