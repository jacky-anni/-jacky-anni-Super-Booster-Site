import jwt_decode from "jwt-decode";
import axios from "axios";
import setAuthToken from "./setAuthToken";
import cookie from "react-cookies";
import { Redirect } from "react-router-dom";

export const authCheck = () => {
  const link_redirect = "/";
  if (localStorage.token) {
    let token = localStorage.getItem("token");
    let decodedToken = jwt_decode(token);
    // console.log("Decoded Token", decodedToken);
    let currentDate = new Date();
    // JWT exp is in seconds
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      // return 0;
      return <Redirect to='/' />;
      // return false;
    } else {
      try {
        axios.get("/api/admin/user").then(function(user) {
          if (user.data.id_ === decodedToken.user.id) {
            return true;
          } else {
            return <Redirect to='/' />;
          }
        });
      } catch (error) {
        window.location.replace(link_redirect);
      }
    }
  } else {
    window.location.replace(link_redirect);
    return false;
  }
};
