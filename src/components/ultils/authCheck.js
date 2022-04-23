import jwt_decode from "jwt-decode";
import axios from "axios";
import setAuthToken from "./setAuthToken";
import cookie from "react-cookies";

export const authCheck = async () => {
  // const user1 = { userId: cookie.load("userId") };

  // const expires = new Date();
  // expires.setDate(Date.now());
  // cookie.save("userId", "1234", {
  //   path: "/",
  //   expires,
  //   maxAge: 100
  // });
  // // console.log(user1);
  // console.log(cookie.load("userId"));

  if (localStorage.token) {
    let token = localStorage.getItem("token");
    let decodedToken = jwt_decode(token);
    // console.log("Decoded Token", decodedToken);
    let currentDate = new Date();
    // JWT exp is in seconds
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      // return 0;
      return (window.location.href = "/login");
      // return false;
    } else {
      try {
        const res = await axios.get("/api/admin/user");
        const data = await res.data;
        if (data.id_ === decodedToken.user.id) {
          return true;
        } else {
          return (window.location.href = "/login");
        }
      } catch (error) {
        return (window.location.href = "/login");
        // return false;
      }
    }
  } else {
    // return (window.location.href = "/login");
    return false;
  }
};
