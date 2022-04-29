import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./photo";

const Banner = ({ profile }) => {
  useEffect(async () => {}, []);

  return (
    <>
      <div className='card card-custodm'>
        <div className='card-body' style={{ backgroundColor: "#ffffff" }}>
          <div className='d-flex'>
            <div className='flex-shrink-0 mr-7'>
              <center>
                <div className='symbol symbol-120 symbol-lg-120 symbol-circle'>
                  {/* <img
                    alt='Pic'
                    src={`/public/admin/images/profile/e27fc8ba-b3eb-46e0-aee6-2e0184b2bbee2.png`}
                    onerror="this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTo8ot81o5G-DZLv5GatY5S5Jsc2rHobmXkQ&usqp=CAU'"
                  /> */}

                  <Photo />
                </div>
              </center>
            </div>

            <div className='flex-grow-1'>
              <div className='d-flex align-items-center justify-content-between flex-wrap mt-2'>
                <div className='mr-3'>
                  <a
                    href='#'
                    className='d-flex align-items-center text-dark text-hover-primary font-size-h5 font-weight-bold mr-3'
                  >
                    {profile.prenom} {profile.nom}
                  </a>
                  <div className='d-flex flex-wrap my-2'>
                    <a
                      href='#'
                      className='text-muted text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2'
                    >
                      <i className='fa fa-envelope'></i>&nbsp;
                      {profile.email}
                    </a>
                    <a
                      href='#'
                      className='text-muted text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2'
                    >
                      <i className='fa fa-address-card'></i>&nbsp;{" "}
                      {profile.role}
                    </a>
                    <a
                      href='#'
                      className='text-muted text-hover-primary font-weight-bold'
                    >
                      <i className='fa fa-user'></i> {profile.droit}
                    </a>
                  </div>
                </div>
                <div className='my-lg-0 my-1'>
                  <a
                    href='#'
                    className='btn btn-sm btn-light-primary font-weight-bolder mr-2'
                  >
                    Contact
                  </a>
                  <a
                    href='#'
                    className='btn btn-sm btn-primary font-weight-bolder'
                  >
                    Hire me
                  </a>
                </div>
              </div>
              <div className='d-flex align-items-center flex-wrap justify-content-between'>
                <div className='flex-grow-1 font-weight-bold text-dark-50 py-2 py-lg-2 mr-5'>
                  Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem.
                  <br />
                  Quis autem vel eum iure reprehenderit qui in.
                </div>
              </div>
            </div>
          </div>
          <div className='separator separator-solid my-7' />
          <div className='d-flex align-items-center flex-wrap'>
            <div className='d-flex align-items-center flex-lg-fill mr-5 my-1'>
              <span className='mr-4'>
                <span className='svg-icon svg-icon-2x'>
                  {/*begin::Svg Icon | path:/keen/theme/demo1/dist/assets/media/svg/icons/Shopping/Dollar.svg*/}
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
                      <rect
                        fill='#000000'
                        opacity='0.3'
                        x='11.5'
                        y={2}
                        width={2}
                        height={4}
                        rx={1}
                      />
                      <rect
                        fill='#000000'
                        opacity='0.3'
                        x='11.5'
                        y={16}
                        width={2}
                        height={5}
                        rx={1}
                      />
                      <path
                        d='M15.493,8.044 C15.2143319,7.68933156 14.8501689,7.40750104 14.4005,7.1985 C13.9508311,6.98949895 13.5170021,6.885 13.099,6.885 C12.8836656,6.885 12.6651678,6.90399981 12.4435,6.942 C12.2218322,6.98000019 12.0223342,7.05283279 11.845,7.1605 C11.6676658,7.2681672 11.5188339,7.40749914 11.3985,7.5785 C11.2781661,7.74950085 11.218,7.96799867 11.218,8.234 C11.218,8.46200114 11.2654995,8.65199924 11.3605,8.804 C11.4555005,8.95600076 11.5948324,9.08899943 11.7785,9.203 C11.9621676,9.31700057 12.1806654,9.42149952 12.434,9.5165 C12.6873346,9.61150047 12.9723317,9.70966616 13.289,9.811 C13.7450023,9.96300076 14.2199975,10.1308324 14.714,10.3145 C15.2080025,10.4981676 15.6576646,10.7419985 16.063,11.046 C16.4683354,11.3500015 16.8039987,11.7268311 17.07,12.1765 C17.3360013,12.6261689 17.469,13.1866633 17.469,13.858 C17.469,14.6306705 17.3265014,15.2988305 17.0415,15.8625 C16.7564986,16.4261695 16.3733357,16.8916648 15.892,17.259 C15.4106643,17.6263352 14.8596698,17.8986658 14.239,18.076 C13.6183302,18.2533342 12.97867,18.342 12.32,18.342 C11.3573285,18.342 10.4263378,18.1741683 9.527,17.8385 C8.62766217,17.5028317 7.88033631,17.0246698 7.285,16.404 L9.413,14.238 C9.74233498,14.6433354 10.176164,14.9821653 10.7145,15.2545 C11.252836,15.5268347 11.7879973,15.663 12.32,15.663 C12.5606679,15.663 12.7949989,15.6376669 13.023,15.587 C13.2510011,15.5363331 13.4504991,15.4540006 13.6215,15.34 C13.7925009,15.2259994 13.9286662,15.0740009 14.03,14.884 C14.1313338,14.693999 14.182,14.4660013 14.182,14.2 C14.182,13.9466654 14.1186673,13.7313342 13.992,13.554 C13.8653327,13.3766658 13.6848345,13.2151674 13.4505,13.0695 C13.2161655,12.9238326 12.9248351,12.7908339 12.5765,12.6705 C12.2281649,12.5501661 11.8323355,12.420334 11.389,12.281 C10.9583312,12.141666 10.5371687,11.9770009 10.1255,11.787 C9.71383127,11.596999 9.34650161,11.3531682 9.0235,11.0555 C8.70049838,10.7578318 8.44083431,10.3968355 8.2445,9.9725 C8.04816568,9.54816454 7.95,9.03200304 7.95,8.424 C7.95,7.67666293 8.10199848,7.03700266 8.406,6.505 C8.71000152,5.97299734 9.10899753,5.53600171 9.603,5.194 C10.0970025,4.85199829 10.6543302,4.60183412 11.275,4.4435 C11.8956698,4.28516587 12.5226635,4.206 13.156,4.206 C13.9160038,4.206 14.6918294,4.34533194 15.4835,4.624 C16.2751706,4.90266806 16.9686637,5.31433061 17.564,5.859 L15.493,8.044 Z'
                        fill='#000000'
                      />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </span>
              <div className='d-flex flex-column text-dark-75'>
                <span className='font-weight-bolder font-size-sm'>Sales</span>
                <span className='font-weight-bolder font-size-h5'>
                  <span className='text-dark-50 font-weight-bold'>$</span>
                  249,500
                </span>
              </div>
            </div>
            {/*end: Item*/}
            {/*begin: Item*/}
            <div className='d-flex align-items-center flex-lg-fill mr-5 my-1'>
              <span className='mr-4'>
                <span className='svg-icon svg-icon-2x'>
                  {/*begin::Svg Icon | path:/keen/theme/demo1/dist/assets/media/svg/icons/Shopping/Sale2.svg*/}
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
                      <polygon
                        fill='#000000'
                        opacity='0.3'
                        points='12 20.0218549 8.47346039 21.7286168 6.86905972 18.1543453 3.07048824 17.1949849 4.13894342 13.4256452 1.84573388 10.2490577 5.08710286 8.04836581 5.3722735 4.14091196 9.2698837 4.53859595 12 1.72861679 14.7301163 4.53859595 18.6277265 4.14091196 18.9128971 8.04836581 22.1542661 10.2490577 19.8610566 13.4256452 20.9295118 17.1949849 17.1309403 18.1543453 15.5265396 21.7286168'
                      />
                      <polygon
                        fill='#000000'
                        points='14.0890818 8.60255815 8.36079737 14.7014391 9.70868621 16.049328 15.4369707 9.950447'
                      />
                      <path
                        d='M10.8543431,9.1753866 C10.8543431,10.1252593 10.085524,10.8938719 9.13585777,10.8938719 C8.18793881,10.8938719 7.41737243,10.1252593 7.41737243,9.1753866 C7.41737243,8.22551387 8.18793881,7.45690126 9.13585777,7.45690126 C10.085524,7.45690126 10.8543431,8.22551387 10.8543431,9.1753866'
                        fill='#000000'
                        opacity='0.3'
                      />
                      <path
                        d='M14.8641422,16.6221564 C13.9162233,16.6221564 13.1456569,15.8535438 13.1456569,14.9036711 C13.1456569,13.9520555 13.9162233,13.1851857 14.8641422,13.1851857 C15.8138085,13.1851857 16.5826276,13.9520555 16.5826276,14.9036711 C16.5826276,15.8535438 15.8138085,16.6221564 14.8641422,16.6221564 Z'
                        fill='#000000'
                        opacity='0.3'
                      />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </span>
              <div className='d-flex flex-column text-dark-75'>
                <span className='font-weight-bolder font-size-sm'>
                  Expenses
                </span>
                <span className='font-weight-bolder font-size-h5'>
                  <span className='text-dark-50 font-weight-bold'>$</span>
                  164,700
                </span>
              </div>
            </div>
            {/*end: Item*/}
            {/*begin: Item*/}
            <div className='d-flex align-items-center flex-lg-fill mr-5 my-1'>
              <span className='mr-4'>
                <span className='svg-icon svg-icon-2x'>
                  {/*begin::Svg Icon | path:/keen/theme/demo1/dist/assets/media/svg/icons/Shopping/Chart-bar1.svg*/}
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
                      <rect
                        fill='#000000'
                        opacity='0.3'
                        x={12}
                        y={4}
                        width={3}
                        height={13}
                        rx='1.5'
                      />
                      <rect
                        fill='#000000'
                        opacity='0.3'
                        x={7}
                        y={9}
                        width={3}
                        height={8}
                        rx='1.5'
                      />
                      <path
                        d='M5,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 C4.55228475,3 5,3.44771525 5,4 L5,19 Z'
                        fill='#000000'
                        fillRule='nonzero'
                      />
                      <rect
                        fill='#000000'
                        opacity='0.3'
                        x={17}
                        y={11}
                        width={3}
                        height={6}
                        rx='1.5'
                      />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </span>
              <div className='d-flex flex-column text-dark-75'>
                <span className='font-weight-bolder font-size-sm'>Net</span>
                <span className='font-weight-bolder font-size-h5'>
                  <span className='text-dark-50 font-weight-bold'>$</span>
                  782,300
                </span>
              </div>
            </div>
            {/*end: Item*/}
            {/*begin: Item*/}
            <div className='d-flex align-items-center flex-lg-fill mr-5 my-1'>
              <span className='mr-4'>
                <span className='svg-icon svg-icon-2x'>
                  {/*begin::Svg Icon | path:/keen/theme/demo1/dist/assets/media/svg/icons/Tools/Hummer.svg*/}
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
                        d='M18.4246212,12.6464466 L21.2530483,9.81801948 C21.4483105,9.62275734 21.764893,9.62275734 21.9601551,9.81801948 L22.6672619,10.5251263 C22.862524,10.7203884 22.862524,11.0369709 22.6672619,11.232233 L19.8388348,14.0606602 C19.6435726,14.2559223 19.3269901,14.2559223 19.131728,14.0606602 L18.4246212,13.3535534 C18.2293591,13.1582912 18.2293591,12.8417088 18.4246212,12.6464466 Z M3.22182541,17.9497475 L13.1213203,8.05025253 C13.5118446,7.65972824 14.1450096,7.65972824 14.5355339,8.05025253 L15.9497475,9.46446609 C16.3402718,9.85499039 16.3402718,10.4881554 15.9497475,10.8786797 L6.05025253,20.7781746 C5.65972824,21.1686989 5.02656326,21.1686989 4.63603897,20.7781746 L3.22182541,19.363961 C2.83130112,18.9734367 2.83130112,18.3402718 3.22182541,17.9497475 Z'
                        fill='#000000'
                        opacity='0.3'
                      />
                      <path
                        d='M12.3890873,1.28248558 L12.3890873,1.28248558 C15.150511,1.28248558 17.3890873,3.52106183 17.3890873,6.28248558 L17.3890873,10.7824856 C17.3890873,11.058628 17.1652297,11.2824856 16.8890873,11.2824856 L12.8890873,11.2824856 C12.6129449,11.2824856 12.3890873,11.058628 12.3890873,10.7824856 L12.3890873,1.28248558 Z'
                        fill='#000000'
                        transform='translate(14.889087, 6.282486) rotate(-45.000000) translate(-14.889087, -6.282486)'
                      />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </span>
              <div className='d-flex flex-column flex-lg-fill'>
                <span className='text-dark-75 font-weight-bolder font-size-sm'>
                  73 Projects
                </span>
                <a href='#' className='text-primary font-weight-bolder'>
                  View
                </a>
              </div>
            </div>
            {/*end: Item*/}
            {/*begin: Item*/}
            <div className='d-flex align-items-center flex-lg-fill mr-5 my-1'>
              <span className='mr-4'>
                <span className='svg-icon svg-icon-2x'>
                  {/*begin::Svg Icon | path:/keen/theme/demo1/dist/assets/media/svg/icons/Communication/Chat2.svg*/}
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
                      <polygon
                        fill='#000000'
                        opacity='0.3'
                        points='5 15 3 21.5 9.5 19.5'
                      />
                      <path
                        d='M13.5,21 C8.25329488,21 4,16.7467051 4,11.5 C4,6.25329488 8.25329488,2 13.5,2 C18.7467051,2 23,6.25329488 23,11.5 C23,16.7467051 18.7467051,21 13.5,21 Z M9,8 C8.44771525,8 8,8.44771525 8,9 C8,9.55228475 8.44771525,10 9,10 L18,10 C18.5522847,10 19,9.55228475 19,9 C19,8.44771525 18.5522847,8 18,8 L9,8 Z M9,12 C8.44771525,12 8,12.4477153 8,13 C8,13.5522847 8.44771525,14 9,14 L14,14 C14.5522847,14 15,13.5522847 15,13 C15,12.4477153 14.5522847,12 14,12 L9,12 Z'
                        fill='#000000'
                      />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </span>
              <div className='d-flex flex-column'>
                <span className='text-dark-75 font-weight-bolder font-size-sm'>
                  648 Comments
                </span>
                <a href='#' className='text-primary font-weight-bolder'>
                  View
                </a>
              </div>
            </div>
            {/*end: Item*/}
            {/*begin: Item*/}
            <div className='d-flex align-items-center flex-lg-fill my-1'>
              <span className='mr-4'>
                <span className='svg-icon svg-icon-2x'>
                  {/*begin::Svg Icon | path:/keen/theme/demo1/dist/assets/media/svg/icons/Communication/Group.svg*/}
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
                      <polygon points='0 0 24 0 24 24 0 24' />
                      <path
                        d='M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z'
                        fill='#000000'
                        fillRule='nonzero'
                        opacity='0.3'
                      />
                      <path
                        d='M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z'
                        fill='#000000'
                        fillRule='nonzero'
                      />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </span>
              <div className='symbol-group symbol-hover'>
                <div
                  className='symbol symbol-30 symbol-circle'
                  data-toggle='tooltip'
                  title='Mark Stone'
                >
                  <img alt='Pic' src='./assets/media/users/150-3.jpg' />
                </div>
                <div
                  className='symbol symbol-30 symbol-circle'
                  data-toggle='tooltip'
                  title='Charlie Stone'
                >
                  <img alt='Pic' src='./assets/media/users/150-11.jpg' />
                </div>
                <div
                  className='symbol symbol-30 symbol-circle'
                  data-toggle='tooltip'
                  title='Luca Doncic'
                >
                  <img alt='Pic' src='./assets/media/users/150-4.jpg' />
                </div>
                <div
                  className='symbol symbol-30 symbol-circle'
                  data-toggle='tooltip'
                  title='Nick Mana'
                >
                  <img alt='Pic' src='./assets/media/users/150-5.jpg' />
                </div>
                <div
                  className='symbol symbol-30 symbol-circle'
                  data-toggle='tooltip'
                  title='Teresa Fox'
                >
                  <img alt='Pic' src='./assets/media/users/150-9.jpg' />
                </div>
                <div
                  className='symbol symbol-30 symbol-circle symbol-light-primary'
                  data-toggle='tooltip'
                  title='More users'
                >
                  <span className='symbol-label font-weight-bold'>5+</span>
                </div>
              </div>
            </div>
            {/*end: Item*/}
          </div>
          {/*end::Bottom*/}
        </div>
      </div>
    </>
  );
};

export default Banner;
