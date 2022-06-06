import { Fragment } from "react";
const LayoutLoginRegister = ({ children, title, newAcocount }) => {
  console.log("ffff");

  return (
    <>
      <body
        id='kt_body'
        className='quick-panel-right demo-panel-right offcanvas-right header-fixed header-mobile-fixed subheader-enabled aside-enabled aside-fixed aside-minimize-hoverable page-loading'
      >
        <div>
          {/* End Google Tag Manager (noscript) */}
          {/*begin::Main*/}
          <div className='d-flex flex-column flex-root'>
            {/*begin::Login*/}
            <div className='login login-3 wizard d-flex flex-column flex-lg-row flex-column-fluid'>
              {/*begin::Aside*/}
              <div className='login-aside d-flex flex-column flex-row-auto'>
                {/*begin::Aside Top*/}
                <div className='d-flex flex-column-auto flex-column py-lg-20 py-10 mb-20'>
                  {/*begin::Aside header*/}
                  <a href='#' className='login-logo text-center pt-lg-10 pb-10'>
                    <img
                      src='https://preview.keenthemes.com/keen/theme/demo1/dist/assets/media/logos/logo-6.svg'
                      alt='logo'
                      className='h-60px'
                    />
                  </a>
                  {/*end::Aside header*/}
                  {/*begin::Aside Title*/}
                  <h3 className='font-weight-bolder text-center font-size-h4 text-dark-50 line-height-xl'>
                    User Experience &amp; Interface Design
                    <br />
                    Strategy SaaS Solutions
                  </h3>
                  {/*end::Aside Title*/}
                </div>
                {/*end::Aside Top*/}
                {/*begin::Aside Bottom*/}
                <div
                  className='d-flex flex-row-fluid bgi-no-repeat bgi-position-x-center bgi-size-contain'
                  style={{
                    backgroundImage:
                      "url(https://preview.keenthemes.com/keen/theme/demo1/dist/assets/media/svg/illustrations/accomplishment.svg)"
                  }}
                />
                {/*end::Aside Bottom*/}
              </div>
              {/*begin::Aside*/}
              {/*begin::Content*/}
              <div className='login-content flex-row-fluid d-flex flex-column p-10'>
                {/*begin::Top*/}
                <div className='text-right d-flex justify-content-center'>
                  <div className='top-signin text-right d-flex justify-content-end pt-5 pb-lg-0 pb-10'>
                    <span className='font-weight-bold text-muted font-size-h4'>
                      Having issues?
                    </span>
                    <a
                      href='javascript:;'
                      className='font-weight-bold text-primary font-size-h4 ml-2'
                      id='kt_login_signup'
                    >
                      Get Help
                    </a>
                  </div>
                </div>
                {/*end::Top*/}
                {/*begin::Wrapper*/}
                <div className='d-flex flex-row-fluid flex-center'>
                  {/*begin::Signin*/}
                  <div className='login-form'>
                    {/*begin::Form*/}

                    {children}
                  </div>
                  {/*end::Signin*/}
                </div>
                {/*end::Wrapper*/}
              </div>
              {/*end::Content*/}
            </div>
            {/*end::Login*/}
          </div>
        </div>
      </body>
    </>
  );
};

export default LayoutLoginRegister;
