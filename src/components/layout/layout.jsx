import { Fragment } from "react";
import HeaderMobile from "./../partials/headerMobile";
import Logo from "./../partials/logo";
import LeftMenu from "./../partials/leftMenu";
import HeaderMenu from "./../partials/headerMenu";
import UserProfileBar from "./../partials/userProfile";
import Notifications from "./../partials/notification";
import Footer from "./../partials/footer";
import ToolBar from "./../partials/toolsBar";
import PageTitle from "./../partials/pageTile";

const Layout = ({ children }) => {
  return (
    <>
      <HeaderMobile />

      {/*begin::Aside*/}
      <div
        className='aside aside-left aside-fixed d-flex flex-column flex-row-auto'
        id='kt_aside'
      >
        <Logo />

        {/*end::Brand*/}
        {/*begin::Aside Menu*/}
        <LeftMenu />
        {/*end::Aside Menu*/}
      </div>
      {/*end::Aside*/}
      {/*begin::Wrapper*/}

      <div
        className='d-flex flex-column flex-row-fluid wrapper'
        id='kt_wrapper'
      >
        {/*begin::Header*/}
        <div id='kt_header' className='header header-fixed'>
          {/*begin::Container*/}
          <div className='container-fluid d-flex align-items-stretch justify-content-between'>
            {/*begin::Header Menu Wrapper*/}
            <div
              className='header-menu-wrapper header-menu-wrapper-left'
              id='kt_header_menu_wrapper'
            >
              <HeaderMenu />
            </div>
            {/*end::Header Menu Wrapper*/}
            {/*begin::Topbar*/}
            <div className='topbar'>
              <Notifications />
              <UserProfileBar />
              {/*end::User*/}
            </div>
            {/*end::Topbar*/}
          </div>
        </div>

        <div className='container'>
          <PageTitle />
          {children}
        </div>
        <Footer />
        {/*end::Footer*/}
      </div>

      {/*end::Wrapper*/}
    </>
  );
};

export default Layout;
