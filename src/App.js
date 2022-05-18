import { React, Fragment, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Home from "./components/home/index";
import Users from "./components/users/users";
import { Provider } from "react-redux";
import store from "./store";
import HeaderMobile from "./components/partials/headerMobile";
import Footer from "./components/partials/footer";
import Courses from "./components/pages/courses/courses";
import UserHome from "./components/users/index";
import CreateUSer from "./components/users/create";
import Profile from "./components/users/profile";
import Login from "./components/account/login";
import setAuthToken from "./components/ultils/setAuthToken";
import NotFount from "./components/layout/notFound";
import ValidateEmail from "./components/account/validateEmail";
import AddPassword from "./components/account/addPassword";
import { LoginLayoutRoute } from "./routing/route";
import { AppLayoutRoute } from "./routing/route";
import Loader from "./components/layout/loader";
import CategorieHome from "./components/categories/index";

const App = () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  useEffect(() => {});
  return (
    <Provider store={store}>
      <>
        <Router>
          <Switch>
            <AppLayoutRoute exact path='/dashboard' component={Home} />
            <AppLayoutRoute
              exact
              path='/dashboard/users'
              component={UserHome}
            />

            <AppLayoutRoute
              exact
              path='/dashboard/users/create'
              component={CreateUSer}
            />
            <AppLayoutRoute
              exact
              path='/dashboard/courses'
              component={Courses}
            />
            <AppLayoutRoute
              exact
              path='/dashboard/profile/:username'
              component={Profile}
            />

            <AppLayoutRoute
              exact
              path='/dashboard/categories'
              component={CategorieHome}
            />

            <LoginLayoutRoute exact path='/' component={Login} />
            <LoginLayoutRoute
              exact
              path='/validate/:id'
              component={ValidateEmail}
            />
            <LoginLayoutRoute
              exact
              path='/add-password'
              component={AddPassword}
            />
            {<LoginLayoutRoute exact path='*' component={NotFount} />}
          </Switch>
        </Router>
      </>
    </Provider>
  );
};

export default App;
