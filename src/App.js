import { React, Fragment, useState, useEffect } from "react";
import { Route, Routes, Redirect } from "react-router-dom";
import Home from "./components/home/index";
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./components/ultils/setAuthToken";
import { LoginLayoutRoute } from "./routing/route";
import { AppLayoutRoute } from "./routing/route";
import ShowCourse from "./components/courses/showCourse";

const App = () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  return (
    <Provider store={store}>
      <>
        {/* page d'accuel */}
        <AppLayoutRoute exact path='/' component={Home} />
        <AppLayoutRoute
          exact
          path='/course/:courseLink'
          component={ShowCourse}
        />
      </>
    </Provider>
  );
};

export default App;
