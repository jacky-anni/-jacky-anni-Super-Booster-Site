import { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUser, logout } from "./../../actions/userActions";
import { Spin } from "antd";
import { Link } from "react-router-dom";
import Loader from "./../layout/loader";
import { PropTypes } from "prop-types";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Skeleton, Space, Input } from "antd";
import { useHistory } from "react-router-dom";

const UserProfileBar = ({
  user: { user, isAuthentificated, photoUser, loading },
  getUser,
  logout
}) => {
  const history = useHistory();

  useEffect(async () => {
    getUser();
  }, []);

  const logoutUser = () => {
    logout();
    history.push("/");
  };

  if (!loading && !isAuthentificated) {
    logout();
    history.push("/");
  }

  return (
    <>
      {user == null ? (
        <Space>
          <Skeleton.Button active={"active"} size={"default"} />
          <Skeleton.Avatar active={"active"} size={33} shape={"circle"} />
        </Space>
      ) : (
        <div className='nav-item dropdown'>
          <a
            href='#'
            className='nav-link d-flex align-items-center dropdown-toggle'
            data-toggle='dropdown'
            data-caret='false'
          >
            <div
              className='btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2'
              id='kt_quick_user_toggle'
            >
              <span className='text-muted font-weight-bold font-size-base d-none d-md-inline mr-1'>
                Salut, {user.prenom}
              </span>
              {/* <span className='text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3'></span>
              <span className='symbol symbol-35 symbol-light-success'>
                <span className='symbol-label font-size-h5 font-weight-bold'>
                  S
                </span>
              </span> */}
            </div>

            <Avatar src={photoUser} size={33} />

            {/* <span className='avatar avatar-sm mr-8pt2'>
              <span className='avatar-title rounded-circle bg-primary'>
                <i className='material-icons'>account_box</i>
              </span>
            </span> */}
          </a>
          <div className='dropdown-menu dropdown-menu-right'>
            <div className='dropdown-header'>
              <strong>Mon compte</strong>
            </div>
            <Link
              to={`/dashboard/profile/${user.username}`}
              className='dropdown-item'
            >
              Mon profile
            </Link>
            <a className='dropdown-item' href='billing.html'>
              Billing
            </a>
            <a className='dropdown-item' href='billing-history.html'>
              Payments
            </a>
            <a className='dropdown-item' onClick={logoutUser}>
              Logout
            </a>
          </div>
          <Loader />
        </div>
      )}
    </>
  );
};

UserProfileBar.propTypes = {
  user: PropTypes.object.isRequired
};
const mapStateToPros = state => ({
  user: state.user
});

export default connect(
  mapStateToPros,
  { getUser, logout }
)(UserProfileBar);
