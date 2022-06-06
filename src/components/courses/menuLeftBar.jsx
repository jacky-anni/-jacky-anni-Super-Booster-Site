import { Fragment } from "react";
import { Link } from "react-router-dom";

const MenuLeftBar = () => {
  return (
    <>
      <div className='col-md-12'>
        <div class='card card-custom gutter-b'>
          <div class='card-body'>
            <div class='example-preview'>
              <ul class='navi'>
                <li class='navi-item font-weight-bolder'>
                  <Link to='/' class='navi-link'>
                    <span class='navi-icon'>
                      <i class='flaticon-user font-weight-bolder'></i>
                    </span>
                    <span class='navi-text '>Modules</span>
                    <span class='navi-label'>
                      <span class='label label-light-success font-weight-bolder'>
                        52
                      </span>
                    </span>
                    <span class='navi-arrow'></span>
                  </Link>
                </li>
                <li class='navi-item font-weight-bolder'>
                  <Link to='/' class='navi-link'>
                    <span class='navi-icon'>
                      <i class='flaticon-music font-weight-bolder'></i>
                    </span>
                    <span class='navi-text '>Vidéos</span>
                    <span class='navi-label'>
                      <span class='label label-light-success font-weight-bolder'>
                        52
                      </span>
                    </span>
                    <span class='navi-arrow'></span>
                  </Link>
                </li>

                <li class='navi-item font-weight-bolder'>
                  <Link to='/' class='navi-link'>
                    <span class='navi-icon'>
                      <i class='flaticon-user font-weight-bolder'></i>
                    </span>
                    <span class='navi-text '>Leçons</span>
                    <span class='navi-label'>
                      <span class='label label-light-success font-weight-bolder'>
                        52
                      </span>
                    </span>
                    <span class='navi-arrow'></span>
                  </Link>
                </li>

                <li class='navi-item font-weight-bolder'>
                  <Link to='/' class='navi-link'>
                    <span class='navi-icon'>
                      <i class='flaticon-file font-weight-bolder'></i>
                    </span>
                    <span class='navi-text '>Documents</span>
                    <span class='navi-label'>
                      <span class='label label-light-success font-weight-bolder'>
                        52
                      </span>
                    </span>
                    <span class='navi-arrow'></span>
                  </Link>
                </li>

                <li class='navi-item font-weight-bolder'>
                  <Link to='/' class='navi-link'>
                    <span class='navi-icon'>
                      <i class='flaticon-comment font-weight-bolder'></i>
                    </span>
                    <span class='navi-text '>Quiz</span>
                    <span class='navi-label'>
                      <span class='label label-light-success font-weight-bolder'>
                        52
                      </span>
                    </span>
                    <span class='navi-arrow'></span>
                  </Link>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuLeftBar;
