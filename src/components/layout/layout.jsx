import { Fragment, useState, useEffect, useLayoutEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import Header from "./../partials/header";
import Slide from "./../partials/slide";
import BannerHome from "./../partials/bannerHome";

const Layout = ({ children }) => {
  const [loading_, setLoading_] = useState(true);

  // const ref = useRef();
  // useEffect(() => {
  //   ref.current = "false";
  // });

  // then, later in another hook or something
  useEffect(() => {
    setLoading_(false);
  });

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)"
  });

  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 999px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  return (
    <>
      <div id='main-wrapper'>
        {/* <Slide />
        <BannerHome /> */}
        <div class='clearfix'></div>
        {children}
      </div>
    </>
  );
};

export default Layout;
