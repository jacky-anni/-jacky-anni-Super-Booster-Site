import { Link } from "react-router-dom";
import Cart from "./../cart/carts";

const Header = () => {
  return (
    <>
      <div className='header header-light'>
        <div className='container'>
          <nav id='navigation' className='navigation navigation-landscape'>
            <div className='nav-header'>
              <Link className='nav-brand ml-5' to='/'>
                {/* <img src='assets/img/logo.png' className='logo' alt='' /> */}
                <b>Super Booster</b>
              </Link>
              <div
                className='nav-toggle'
                style={{ position: "absolute", left: "0px" }}
              />
            </div>
            <div
              className='nav-menus-wrapper'
              style={{ transitionProperty: "none" }}
            >
              <ul className='nav-menu'>
                <li className='active'>
                  <a href='#'>
                    Home
                    <span className='submenu-indicator' />
                  </a>
                  <ul className='nav-dropdown nav-submenu'>
                    <li>
                      <a href='#'>
                        New Home Design
                        <span className='submenu-indicator' />
                      </a>
                      <ul className='nav-dropdown nav-submenu'>
                        <li>
                          <a href='new-home-1.html'>Modern Home Page</a>
                        </li>
                        <li>
                          <a href='new-home-2.html'>Standard Home Page</a>
                        </li>
                        <li>
                          <a href='new-home-3.html'>Classic Home Page</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to='/'>Home 1</Link>
                    </li>
                    <li>
                      <a href='home-2.html'>Home 2</a>
                    </li>
                    <li>
                      <a href='home-3.html'>Home 3</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='#'>
                    Courses
                    <span className='submenu-indicator' />
                  </a>
                  <ul className='nav-dropdown nav-submenu'>
                    <li>
                      <a href='#'>
                        Courses Grid Sidebar
                        <span className='submenu-indicator' />
                      </a>
                      <ul className='nav-dropdown nav-submenu'>
                        <li>
                          <a href='grid-with-sidebar.html'>Courses grid 1</a>
                        </li>
                        <li>
                          <a href='grid-with-sidebar-2.html'>Courses grid 1</a>
                        </li>
                        <li>
                          <a href='grid-with-sidebar-3.html'>Courses grid 1</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href='list-with-sidebar.html'>
                        List Layout with Sidebar
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        Courses Grid Full Width
                        <span className='submenu-indicator' />
                      </a>
                      <ul className='nav-dropdown nav-submenu'>
                        <li>
                          <a href='full-width-course.html'>Courses grid 1</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href='#'>
                        Courses Detail
                        <span className='submenu-indicator' />
                      </a>
                      <ul className='nav-dropdown nav-submenu'>
                        <li>
                          <a href='detail.html'>Course Detail 1</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href='find-instructor.html'>Find Instructor</a>
                    </li>
                    <li>
                      <a href='instructor-detail.html'>Instructor Detail</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='#'>
                    Pages
                    <span className='submenu-indicator' />
                  </a>
                  <ul className='nav-dropdown nav-submenu'>
                    <li className>
                      <a href='#'>
                        User Dashboard
                        <span className='submenu-indicator' />
                      </a>
                      <ul className='nav-dropdown nav-submenu'>
                        <li>
                          <a href='dashboard.html'>User Dashboard</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href='#'>
                        Shop Pages
                        <span className='submenu-indicator' />
                      </a>
                      <ul className='nav-dropdown nav-submenu'>
                        <li>
                          <a href='shop-full-width.html'>Shop Full Width</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href='about-us.html'>About Us</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='contact.html'>Contact</a>
                </li>
              </ul>
              <ul className='nav-menu nav-menu-social align-to-right'>
                <li className='login_cldick light'>
                  <a href='#' data-toggle='modal' data-target='#login'>
                    Connexion
                  </a>
                </li>

                <li className='login_click light'>
                  <a href='#' data-toggle='modal' data-target='#login'>
                    Inscrivez-vous
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <Cart />
        </div>
      </div>
    </>
  );
};

export default Header;
