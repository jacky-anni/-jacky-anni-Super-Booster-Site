import { Fragment } from "react";
import { Link } from "react-router-dom";

const LeftMenu = () => {
  return (
    <>
      <div
        className='aside-menu-wrapper flex-column-fluid'
        id='kt_aside_menu_wrapper'
      >
        {/*begin::Menu Container*/}
        <div
          id='kt_aside_menu'
          className='aside-menu my-4'
          data-menu-vertical={1}
          data-menu-scroll={1}
          data-menu-dropdown-timeout={500}
        >
          {/*begin::Menu Nav*/}
          <ul className='menu-nav'>
            <li className='menu-item' aria-haspopup='true'>
              <Link to='/' className='menu-link'>
                <span className='svg-icon menu-icon'>
                  <span className='svg-icon svg-icon-primary svg-icon-2x'>
                    {/*begin::Svg Icon | path:/var/www/preview.keenthemes.com/keen/releases/2021-04-21-040700/theme/demo1/dist/../src/media/svg/icons/General/User.svg*/}
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
                          x={4}
                          y={4}
                          width={7}
                          height={7}
                          rx='1.5'
                        />
                        <path
                          d='M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z'
                          fill='#000000'
                          opacity='0.3'
                        />
                      </g>
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </span>
                <Link to='/users'>
                  <span className='menu-text'>Utilisateurs</span>
                </Link>
              </Link>
            </li>

            <li className='menu-item' aria-haspopup='true'>
              <Link to='/' className='menu-link'>
                <span className='svg-icon menu-icon'>
                  <span className='svg-icon svg-icon-primary svg-icon-2x'>
                    {/*begin::Svg Icon | path:/var/www/preview.keenthemes.com/keen/releases/2021-04-21-040700/theme/demo1/dist/../src/media/svg/icons/General/User.svg*/}
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
                          x={4}
                          y={4}
                          width={7}
                          height={7}
                          rx='1.5'
                        />
                        <path
                          d='M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z'
                          fill='#000000'
                          opacity='0.3'
                        />
                      </g>
                    </svg>
                  </span>
                  {/*end::Svg Icon*/}
                </span>
                <Link to='/courses'>
                  <span className='menu-text'>Formations</span>
                </Link>
              </Link>
            </li>

            <li className='menu-section'>
              <h4 className='menu-text'>Custom</h4>
              <i className='menu-icon ki ki-bold-more-hor icon-md' />
            </li>
            <li
              className='menu-item menu-item-submenu'
              aria-haspopup='true'
              data-menu-toggle='hover'
            >
              <a href='javascript:;' className='menu-link menu-toggle'>
                <span className='svg-icon menu-icon'>
                  {/*begin::Svg Icon | path:/keen/theme/demo1/dist/assets/media/svg/icons/Layout/Layout-4-blocks.svg*/}
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
                        x={4}
                        y={4}
                        width={7}
                        height={7}
                        rx='1.5'
                      />
                      <path
                        d='M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z'
                        fill='#000000'
                        opacity='0.3'
                      />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
                <span className='menu-text'>Applications</span>
                <i className='menu-arrow' />
              </a>
              <div className='menu-submenu'>
                <i className='menu-arrow' />
                <ul className='menu-subnav'>
                  <li
                    className='menu-item menu-item-parent'
                    aria-haspopup='true'
                  >
                    <span className='menu-link'>
                      <span className='menu-text'>Applications</span>
                    </span>
                  </li>
                  <li
                    className='menu-item menu-item-submenu'
                    aria-haspopup='true'
                    data-menu-toggle='hover'
                  >
                    <a href='javascript:;' className='menu-link menu-toggle'>
                      <i className='menu-bullet menu-bullet-line'>
                        <span />
                      </i>
                      <span className='menu-text'>Users</span>
                      <span className='menu-label'>
                        <span className='label label-rounded label-primary'>
                          6
                        </span>
                      </span>
                      <i className='menu-arrow' />
                    </a>
                    <div className='menu-submenu'>
                      <i className='menu-arrow' />
                      <ul className='menu-subnav'>
                        <li className='menu-item' aria-haspopup='true'>
                          <a
                            href='custom/apps/user/list-default.html'
                            className='menu-link'
                          >
                            <i className='menu-bullet menu-bullet-dot'>
                              <span />
                            </i>
                            <span className='menu-text'>List - Default</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          {/*end::Menu Nav*/}
        </div>
        {/*end::Menu Container*/}
      </div>
    </>
  );
};

export default LeftMenu;