import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "./../actions/userActions";
import { useEffect, Fragment, useState } from "react";
import { Spin } from "antd";
import { authCheck } from "./../components/ultils/authCheck";
import cookie from "react-cookies";

const PrivateRoute = ({ path, component: Component, render, ...rest }) => {
  useEffect(async () => {
    let auth = await authCheck();
    cookie.save("user", auth);
  });

  const auth_ = cookie.load("user");

  console.log(auth_);

  if (auth_ === false) {
    return (window.location.href = "/login");
    // return <Redirect to='/login' />;
  } else {
    return auth_;
    // <Route
    //   {...rest}
    //   render={props => {
    //     return Component ? <Component {...props} /> : render(props);
    //   }}
    // />
  }
};

export default PrivateRoute;
