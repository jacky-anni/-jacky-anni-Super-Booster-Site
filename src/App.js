import { React, Fragment, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/home/index";
import Users from "./components/users/users";
import { Provider } from "react-redux";
import store from "./store";
import HeaderMobile from "./components/partials/headerMobile";
import Layout from "./components/layout/layout";
import Footer from "./components/partials/footer";
import Courses from "./components/pages/courses/courses";
import UserHome from "./components/users/index";
import Profile from "./components/users/profile";
import Login from "./components/login/login";
import setAuthToken from "./components/ultils/setAuthToken";
import NotFount from "./components/layout/notFound";

function App() {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  if (
    window.location.pathname === "/login" ||
    window.location.pathname === "/register"
  ) {
    var layoutView = false;
  } else {
    var layoutView = true;
  }

  return (
    <Provider store={store}>
      <>
        {layoutView == false ? (
          <Switch>
            <Route exact path='/login' component={Login} />
          </Switch>
        ) : (
          <Switch>
            <Layout>
              <Route
                exact
                path='/users'
                component={UserHome}
                title={"Utilisaeurs"}
              />
              <Route exact path='/courses' component={Courses} />
              <Route exact path='/profile/:username' component={Profile} />
              <Route exact path='/' component={Home} />
              {/* <Route exact path='*' component={NotFount} /> */}
            </Layout>
          </Switch>
        )}
      </>
    </Provider>
  );
}

export default App;
