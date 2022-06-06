import { Fragment, useState, useEffect, useLayoutEffect, useRef } from "react";
import HeaderMobile from "./../partials/headerMobile";
import Logo from "./../partials/logo";
import LeftMenu from "./../partials/leftMenu";
import HeaderMenu from "./../partials/headerMenu";
import UserProfileBar from "./../partials/userProfile";
import Notifications from "./../partials/notification";
import Footer from "./../partials/footer";
import ToolBar from "./../partials/toolsBar";
import Loader from "./loader";
import { useMediaQuery } from "react-responsive";

const Layout = ({ children }) => {
  const [loading_, setLoading_] = useState(false);

  // const ref = useRef();
  // useEffect(() => {
  //   ref.current = "false";
  // });

  // then, later in another hook or something
  useLayoutEffect(() => {
    setLoading_(true);
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
      {/* {isTabletOrMobile && <HeaderMobile />} */}
      <HeaderMobile />

      <div
        className='aside aside-left aside-fixed d-flex flex-column flex-row-auto'
        id='kt_aside'
      >
        <Logo />
        {/* {isDesktopOrLaptop && <LeftMenu />} */}
        <LeftMenu />
      </div>
      <div
        className='d-flex flex-column flex-row-fluid wrapper'
        id='kt_wrapper'
      >
        <div id='kt_header' className='header header-fixed'>
          <div className='container-fluid d-flex align-items-stretch justify-content-between'>
            <div
              className='header-menu-wrapper header-menu-wrapper-left'
              id='kt_header_menu_wrapper'
            >
              <HeaderMenu />
            </div>

            <div className='topbar'>
              <Notifications />
              <UserProfileBar />
            </div>
          </div>
        </div>

        {/* {loading_ ? <Loader /> : null}

        {console.log(loading_)} */}

        <div className='container'>
          {/* <div>
            <h1>Device Test!</h1>
            {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
            {isBigScreen && <p>You have a huge screen</p>}
            {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
            <p>
              Your are in {isPortrait ? "portrait" : "landscape"} orientation
            </p>
            {isRetina && <p>You are retina</p>}
          </div> */}

          {!loading_ ? <Loader /> : children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
