import { React, Fragment } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/home/index";
import Menu from "./components/partials/menu";
import Users from "./components/users/users";
import { Provider } from "react-redux";
import store from "./store";
import HeaderMobile from "./components/partials/headerMobile";
import Layout from "./components/layout/layout";
import Footer from "./components/partials/footer";
import Courses from "./components/pages/courses/courses";
import UserHome from "./components/users/index";
import Profile from "./components/users/profile";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Layout>
          <Switch>
            {/* <Route path="/home" element={<Home title ={'Home'} />} /> */}
            <Route path='/users' component={UserHome} title={"Utilisateur"} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/courses' component={Courses} />
            <Route exact path='/courses' component={Courses} />
            <Route exact path='/profile/:username' component={Profile} />
          </Switch>
        </Layout>
      </Fragment>
    </Provider>
  );
}

export default App;
