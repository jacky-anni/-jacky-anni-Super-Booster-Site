import React, { Fragment, useEffect } from "react";
import { authCheck } from "./../ultils/authCheck";

const Home = () => {
  useEffect(async () => {
    const log = await authCheck();
    console.log(log);
  });

  return (
    <>
      <h1>Bonjour a tous </h1>
    </>
  );
};

export default Home;
