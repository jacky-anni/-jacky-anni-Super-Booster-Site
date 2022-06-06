import { Fragment, useEffect, useState } from "react";
import { Spin } from "antd";

const PageTitle = ({ title }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });

  return (
    <>
      <div
        className='subheader py-6 py-lg-8 subheader-transparent'
        id='kt_subheader'
      >
        <div className='container d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap'>
          {/*begin::Info*/}
          <div className='d-flex align-items-center flex-wrap mr-1'>
            {/*begin::Page Heading*/}
            <div className='d-flex align-items-baseline flex-wrap mr-5'>
              {/*begin::Page Title*/}
              <h5 className='text-dark font-weight-bold my-1 mr-5'>{title}</h5>
              {/*end::Page Title*/}
              {/*begin::Breadcrumb*/}
              <ul className='breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold p-0 my-2 font-size-sm'>
                <li className='breadcrumb-item text-muted'>
                  <a href='#' className='text-muted'>
                    Features
                  </a>
                </li>
                <li className='breadcrumb-item text-muted'>
                  <a href='#' className='text-muted'>
                    Custom
                  </a>
                </li>
                <li className='breadcrumb-item text-muted'>
                  <a href='#' className='text-muted'>
                    Utilities
                  </a>
                </li>
              </ul>
              {/*end::Breadcrumb*/}
            </div>
            {/*end::Page Heading*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTitle;
