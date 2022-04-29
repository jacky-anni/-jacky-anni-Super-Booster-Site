import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "./../actions/userActions";
import { useEffect, Fragment, useState } from "react";
import { Spin } from "antd";
import { authCheck } from "./../components/ultils/authCheck";
import cookie from "react-cookies";

const PrivateRoute = ({ path, component: Component, render, ...rest }) => {
  // useEffect(async () => {
  //   let auth = await authCheck();
  //   // cookie.save("user", auth);
  // });

  const auth = authCheck();
  if (auth === false) {
    return <Redirect to='/login' />;
  } else {
    return (
      <Route
        exact
        {...rest}
        render={props => {
          return Component ? <Component {...props} /> : render(props);
        }}
      />
    );
  }
};

export default PrivateRoute;
