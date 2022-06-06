import { React, Fragment, useState, useEffect } from "react";
import { Route, Routes, Redirect } from "react-router-dom";
import Home from "./components/home/index";
import Users from "./components/users/users";
import { Provider } from "react-redux";
import store from "./store";
import HeaderMobile from "./components/partials/headerMobile";
import Footer from "./components/partials/footer";
import Courses from "./components/courses/index";
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
import CreateCourse from "./components/courses/createCourses";
import ShowCourse from "./components/courses/showCourse";

const App = () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  return (
    <Provider store={store}>
      <>
        <AppLayoutRoute exact path='/dashboard' component={Home} />
        <AppLayoutRoute exact path='/dashboard/users' component={UserHome} />
        <AppLayoutRoute
          exact
          path='/dashboard/users/create'
          component={CreateUSer}
        />
        <AppLayoutRoute exact path='/dashboard/courses' component={Courses} />

        <AppLayoutRoute
          exact
          path='/dashboard/course/:courseLink'
          component={ShowCourse}
        />

        <AppLayoutRoute
          exact
          path='/dashboard/profile/:username'
          component={Profile}
        />

        <AppLayoutRoute
          exact
          path='/dashboard/course/create/:username'
          component={CreateCourse}
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
        <LoginLayoutRoute exact path='/add-password' component={AddPassword} />
        {/* <LoginLayoutRoute exact path='*' component={NotFount} /> */}
      </>
    </Provider>
  );
};

export default App;
