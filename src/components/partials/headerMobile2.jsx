import { Link } from "react-router-dom";
const HeaderMobile = () => {
  return (
    <>
      <div
        className='bg-white'
        style={{
          position: "fixed",
          bottom: "-2px",
          zIndex: "1",
          width: "100%"
        }}
      >
        <div className='card-header card-header-tabs-line bg-white'>
          <div className='card-toolbar'>
            <ul className='nav nav-tabs nav-bold nav-tabs-line'>
              <li className='nav-item'>
                <Link to='/dashboard/users' className='nav-link actidve'>
                  <span className='nav-icon'>
                    <i className='flaticon2-user' />
                  </span>
                  {/* <span className='nav-text'>Week</span> */}
                </Link>
              </li>
              <Link to='/dashboard/courses' className='nav-link actidve'>
                <span className='nav-icon'>
                  <i className='flaticon2-drop' />
                </span>
                {/* <span className='nav-text'>Month</span> */}
              </Link>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  data-toggle='dropdown'
                  href='#'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  <span className='nav-icon'>
                    <i className='flaticon2-gear' />
                  </span>
                  {/* <span className='nav-text'>Year</span> */}
                </a>
                <div className='dropdown-menu'>
                  <a
                    className='dropdown-item'
                    data-toggle='tab'
                    href='#kt_tab_pane_3_4'
                  >
                    Action
                  </a>
                  <a
                    className='dropdown-item'
                    data-toggle='tab'
                    href='#kt_tab_pane_3_4'
                  >
                    Another action
                  </a>
                  <a
                    className='dropdown-item'
                    data-toggle='tab'
                    href='#kt_tab_pane_3_4'
                  >
                    Something else here
                  </a>
                  <div className='dropdown-divider' />
                  <a
                    className='dropdown-item'
                    data-toggle='tab'
                    href='#kt_tab_pane_3_4'
                  >
                    Separated link
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderMobile;
