import { Fragment } from "react";
const QuickAction = ({ user }) => {
  return (
    <>
      <div
        className='dropdown dropdown-inline ml-2'
        data-toggle='tooltip'
        title='Quick actions'
        data-placement='left'
      >
        <a
          href='#'
          className='btn btn-icon-primary btn-hover-light-primary btn-sm btn-icon'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        >
          <span className='svg-icon svg-icon-md svg-icon-success'>
            {/*begin::Svg Icon | path:/keen/theme/demo1/dist/assets/media/svg/icons/Navigation/Angle-right.svg*/}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              width='24px'
              height='24px'
              viewBox='0 0 24 24'
              version='1.1'
            >
              <g stroke='none' strokeWidth={1} fill='none' fillRule='evenodd'>
                <polygon points='0 0 24 0 24 24 0 24' />
                <path
                  d='M6.70710678,15.7071068 C6.31658249,16.0976311 5.68341751,16.0976311 5.29289322,15.7071068 C4.90236893,15.3165825 4.90236893,14.6834175 5.29289322,14.2928932 L11.2928932,8.29289322 C11.6714722,7.91431428 12.2810586,7.90106866 12.6757246,8.26284586 L18.6757246,13.7628459 C19.0828436,14.1360383 19.1103465,14.7686056 18.7371541,15.1757246 C18.3639617,15.5828436 17.7313944,15.6103465 17.3242754,15.2371541 L12.0300757,10.3841378 L6.70710678,15.7071068 Z'
                  fill='#000000'
                  fillRule='nonzero'
                  transform='translate(12.000003, 11.999999) rotate(-270.000000) translate(-12.000003, -11.999999)'
                />
              </g>
            </svg>
            {/*end::Svg Icon*/}
          </span>
        </a>
        <div className='dropdown-menu p-0 m-0 dropdown-menu-md dropdown-menu-right'>
          {/*begin::Navigation*/}
          <ul className='navi navi-hover'>
            <div className='col-md-12'>
              {/*begin::Card*/}
              <div className='card card-custom '>
                {/*begin::Body*/}
                <div className='card-body '>
                  {/*begin::Toolbar*/}
                  <div className='d-flex justify-content-end'>
                    <div
                      className='dropdown dropdown-inline'
                      data-toggle='tooltip'
                      title='Quick actions'
                      data-placement='left'
                    >
                      <div className='dropdown-menu dropdown-menu-md dropdown-menu-right'>
                        {/*end::Naviigation*/}
                      </div>
                    </div>
                  </div>
                  {/*end::Toolbar*/}
                  {/*begin::User*/}
                  <div className='d-flex align-items-end py-2'>
                    {/*begin::Pic*/}
                    <div className='d-flex align-items-center'>
                      {/*begin::Pic*/}
                      <div className='d-flex flex-shrink-0 mr-5'>
                        <div className='symbol symbol-circle symbol-lg-45'>
                          <img
                            src='./assets/media/users/150-6.jpg'
                            alt='image'
                          />
                        </div>
                      </div>
                      {/*end::Pic*/}
                      {/*begin::Title*/}
                      <div className='d-flex flex-column'>
                        <a
                          href='#'
                          className='text-dark font-weight-bold text-hover-primary font-size-h5 mb-0'
                        >
                          {user.name}
                        </a>
                        <span className='text-muted font-weight-bold'>
                          Head of Development
                        </span>
                      </div>
                      {/*end::Title*/}
                    </div>
                    {/*end::Title*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Desc*/}
                  <p className='py-2'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  {/*end::Desc*/}
                  {/*begin::Contacts*/}
                  <div className='py-2'>
                    <div className='d-flex align-items-center mb-2'>
                      <span className='flex-shrink-0 mr-2'>
                        <span className='svg-icon svg-icon-md'>
                          {/*begin::Svg Icon | path:/keen/theme/demo1/dist/assets/media/svg/icons/Communication/Active-call.svg*/}
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            width='24px'
                            height='24px'
                            viewBox='0 0 24 24'
                            version='1.1'
                          >
                            <g
                              stroke='none'
                              strokeWidth={1}
                              fill='none'
                              fillRule='evenodd'
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <path
                                d='M13.0799676,14.7839934 L15.2839934,12.5799676 C15.8927139,11.9712471 16.0436229,11.0413042 15.6586342,10.2713269 L15.5337539,10.0215663 C15.1487653,9.25158901 15.2996742,8.3216461 15.9083948,7.71292558 L18.6411989,4.98012149 C18.836461,4.78485934 19.1530435,4.78485934 19.3483056,4.98012149 C19.3863063,5.01812215 19.4179321,5.06200062 19.4419658,5.11006808 L20.5459415,7.31801948 C21.3904962,9.0071287 21.0594452,11.0471565 19.7240871,12.3825146 L13.7252616,18.3813401 C12.2717221,19.8348796 10.1217008,20.3424308 8.17157288,19.6923882 L5.75709327,18.8875616 C5.49512161,18.8002377 5.35354162,18.5170777 5.4408655,18.2551061 C5.46541191,18.1814669 5.50676633,18.114554 5.56165376,18.0596666 L8.21292558,15.4083948 C8.8216461,14.7996742 9.75158901,14.6487653 10.5215663,15.0337539 L10.7713269,15.1586342 C11.5413042,15.5436229 12.4712471,15.3927139 13.0799676,14.7839934 Z'
                                fill='#000000'
                              />
                              <path
                                d='M14.1480759,6.00715131 L13.9566988,7.99797396 C12.4781389,7.8558405 11.0097207,8.36895892 9.93933983,9.43933983 C8.8724631,10.5062166 8.35911588,11.9685602 8.49664195,13.4426352 L6.50528978,13.6284215 C6.31304559,11.5678496 7.03283934,9.51741319 8.52512627,8.02512627 C10.0223249,6.52792766 12.0812426,5.80846733 14.1480759,6.00715131 Z M14.4980938,2.02230302 L14.313049,4.01372424 C11.6618299,3.76737046 9.03000738,4.69181803 7.1109127,6.6109127 C5.19447112,8.52735429 4.26985715,11.1545872 4.51274152,13.802405 L2.52110319,13.985098 C2.22450978,10.7517681 3.35562581,7.53777247 5.69669914,5.19669914 C8.04101739,2.85238089 11.2606138,1.72147333 14.4980938,2.02230302 Z'
                                fill='#000000'
                                fillRule='nonzero'
                                opacity='0.3'
                              />
                            </g>
                          </svg>
                          {/*end::Svg Icon*/}
                        </span>
                      </span>
                      <span className='text-muted font-weight-bold'>
                        +4567800090
                      </span>
                    </div>
                    <div className='d-flex align-items-center mb-2'>
                      <span className='flex-shrink-0 mr-2'>
                        <span className='svg-icon svg-icon-md'>
                          {/*begin::Svg Icon | path:/keen/theme/demo1/dist/assets/media/svg/icons/Communication/Mail.svg*/}
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            width='24px'
                            height='24px'
                            viewBox='0 0 24 24'
                            version='1.1'
                          >
                            <g
                              stroke='none'
                              strokeWidth={1}
                              fill='none'
                              fillRule='evenodd'
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <path
                                d='M5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z'
                                fill='#000000'
                              />
                            </g>
                          </svg>
                          {/*end::Svg Icon*/}
                        </span>
                      </span>
                      <a
                        href='#'
                        className='text-muted text-hover-primary font-weight-bold'
                      >
                        mail@example.com
                      </a>
                    </div>
                    <div className='d-flex align-items-center mb-2'>
                      <span className='flex-shrink-0 mr-2'>
                        <span className='svg-icon svg-icon-md'>
                          {/*begin::Svg Icon | path:/keen/theme/demo1/dist/assets/media/svg/icons/Map/Marker1.svg*/}
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            xmlnsXlink='http://www.w3.org/1999/xlink'
                            width='24px'
                            height='24px'
                            viewBox='0 0 24 24'
                            version='1.1'
                          >
                            <g
                              stroke='none'
                              strokeWidth={1}
                              fill='none'
                              fillRule='evenodd'
                            >
                              <rect x={0} y={0} width={24} height={24} />
                              <path
                                d='M5,10.5 C5,6 8,3 12.5,3 C17,3 20,6.75 20,10.5 C20,12.8325623 17.8236613,16.03566 13.470984,20.1092932 C12.9154018,20.6292577 12.0585054,20.6508331 11.4774555,20.1594925 C7.15915182,16.5078313 5,13.2880005 5,10.5 Z M12.5,12 C13.8807119,12 15,10.8807119 15,9.5 C15,8.11928813 13.8807119,7 12.5,7 C11.1192881,7 10,8.11928813 10,9.5 C10,10.8807119 11.1192881,12 12.5,12 Z'
                                fill='#000000'
                                fillRule='nonzero'
                              />
                            </g>
                          </svg>
                          {/*end::Svg Icon*/}
                        </span>
                      </span>
                      <a
                        href='#'
                        className='text-muted text-hover-primary font-weight-bold'
                      >
                        Barcelona, Spain
                      </a>
                    </div>
                  </div>
                  {/*end::Contacts*/}
                  {/*begin::Actions*/}
                  {/*end::Actions*/}
                </div>
                {/*end::Body*/}
              </div>
              {/*end::Card*/}
            </div>

            <li className='navi-separator mt-3 opacity-70' />
            <li className='navi-footer py-4'>
              <a
                className='btn btn-primary font-weight-bold btn-sm px-5'
                href='#'
              >
                <i className='ki ki-plus icon-sm' />
                Create
              </a>
            </li>
          </ul>
          {/*end::Navigation*/}
        </div>
      </div>
    </>
  );
};

export default QuickAction;
