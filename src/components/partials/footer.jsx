import { Fragment } from "react";
const Footer = () => {
  return (
    <>
      {/*begin::Footer*/}
      <div
        className='footer bg-white py-4 d-flex flex-lg-column'
        id='kt_footer'
      >
        {/*begin::Container*/}
        <div className='container d-flex flex-column flex-md-row align-items-center justify-content-between'>
          {/*begin::Copyright*/}
          <div className='text-dark order-2 order-md-1'>
            <span className='text-muted font-weight-bold mr-2'>2022©</span>
            <a
              href='https://keenthemes.com/keen'
              target='_blank'
              className='text-dark-75 text-hover-primary'
            >
              Keenthemes
            </a>
          </div>
          {/*end::Copyright*/}
          {/*begin::Nav*/}
          <div className='nav nav-dark'>
            <a
              href='https://keenthemes.com/keen'
              target='_blank'
              className='nav-link pl-0 pr-2'
            >
              About
            </a>
            <a
              href='https://keenthemes.com/keen'
              target='_blank'
              className='nav-link pr-2'
            >
              Team
            </a>
            <a
              href='https://keenthemes.com/keen'
              target='_blank'
              className='nav-link pr-0'
            >
              Contact
            </a>
          </div>
          {/*end::Nav*/}
        </div>
        {/*end::Container*/}
      </div>
    </>
  );
};

export default Footer;
