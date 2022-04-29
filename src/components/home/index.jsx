import React, { Fragment, useEffect } from "react";
import { authCheck } from "./../ultils/authCheck";

const Home = () => {
  const ok = authCheck();
  return (
    <>
      <h1>Bonjour a tous {process.env.API_URL} </h1>
    </>
  );
};

export default Home;
