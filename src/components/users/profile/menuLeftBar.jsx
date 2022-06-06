import { Fragment } from "react";
import { Link } from "react-router-dom";

const MenuLeftBar = ({ username }) => {
  return (
    <>
      <div className='col-md-3'>
        <div class='card card-custom gutter-b'>
          <div class='card-body'>
            <div class='example-preview'>
              <ul class='navi'>
                <li class='navi-item'>
                  <Link
                    to={`/dashboard/course/create/${username}`}
                    class='navi-link'
                  >
                    <span class='navi-icon'>
                      <i class='flaticon-medal'></i>
                    </span>
                    <span class='navi-text'>Formations</span>
                    <span class='navi-label'>
                      <span class='label label-light-info font-weight-bold'>
                        2
                      </span>
                    </span>
                    <span class='navi-arrow'></span>
                  </Link>
                </li>
                <li class='navi-item'>
                  <a class='navi-link' href='#'>
                    <span class='navi-icon'>
                      <i class='flaticon2-layers-1'></i>
                    </span>
                    <span class='navi-text'>Settings</span>
                    <span class='navi-label'>
                      <span class='label label-inline label-light-primary font-weight-bold'>
                        Updated
                      </span>
                    </span>
                    <span class='navi-arrow'></span>
                  </a>
                </li>
                <li class='navi-item'>
                  <a class='navi-link' href='#'>
                    <span class='navi-icon'>
                      <i class='flaticon2-rocket-1'></i>
                    </span>
                    <span class='navi-text'>Profile</span>
                    <span class='navi-label'>
                      <span class='label label-inline label-light-danger font-weight-bold'>
                        New
                      </span>
                    </span>
                    <span class='navi-arrow'></span>
                  </a>
                </li>
                <li class='navi-item'>
                  <a class='navi-link' href='#'>
                    <span class='navi-icon'>
                      <i class='flaticon2-mail'></i>
                    </span>
                    <span class='navi-text'>Orders</span>
                    <span class='navi-label'>
                      <span class='label label-inline label-light-success font-weight-bold'>
                        Pending
                      </span>
                    </span>
                    <span class='navi-arrow'></span>
                  </a>
                </li>
              </ul>
              <div class='separator separator-dashed mt-5 mb-8'></div>
              <div class='dropdown'>
                <a
                  href='#'
                  class='btn btn-light-primary font-weight-bold dropdown-toggle'
                  data-toggle='dropdown'
                >
                  Dropdown example
                </a>
                <div class='dropdown-menu dropdown-menu-lg py-5'>
                  <ul class='navi'>
                    <li class='navi-item'>
                      <a class='navi-link' href='#'>
                        <span class='navi-icon'>
                          <i class='flaticon2-chat-1'></i>
                        </span>
                        <span class='navi-text'>Messages</span>
                        <span class='navi-label'>
                          <span class='label label-light-info font-weight-bold'>
                            2
                          </span>
                        </span>
                        <span class='navi-arrow'></span>
                      </a>
                    </li>
                    <li class='navi-item'>
                      <a class='navi-link' href='#'>
                        <span class='navi-icon'>
                          <i class='flaticon2-layers-1'></i>
                        </span>
                        <span class='navi-text'>Settings</span>
                        <span class='navi-label'>
                          <span class='label label-inline label-light-primary font-weight-bold'>
                            Updated
                          </span>
                        </span>
                        <span class='navi-arrow'></span>
                      </a>
                    </li>
                    <li class='navi-item'>
                      <a class='navi-link' href='#'>
                        <span class='navi-icon'>
                          <i class='flaticon2-rocket-1'></i>
                        </span>
                        <span class='navi-text'>Profile</span>
                        <span class='navi-label'>
                          <span class='label label-inline label-light-danger font-weight-bold'>
                            New
                          </span>
                        </span>
                        <span class='navi-arrow'></span>
                      </a>
                    </li>
                    <li class='navi-item'>
                      <a class='navi-link' href='#'>
                        <span class='navi-icon'>
                          <i class='flaticon2-mail'></i>
                        </span>
                        <span class='navi-text'>Orders</span>
                        <span class='navi-label'>
                          <span class='label label-inline label-light-success font-weight-bold'>
                            Pending
                          </span>
                        </span>
                        <span class='navi-arrow'></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuLeftBar;
