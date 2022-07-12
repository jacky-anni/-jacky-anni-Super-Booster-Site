import React, { Fragment, useEffect } from "react";
import Slide from "./../partials/slide";
import BannerHome from "./../partials/bannerHome";
import CoursesCarousel from "./../courses/coursesCarousel";

const Home = () => {
  return (
    <>
      <Slide />
      <BannerHome />
      <CoursesCarousel />
    </>
  );
};

export default Home;
