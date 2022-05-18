import { Fragment } from "react";
import ProfileInformation from "./profileInformation";
import ChangePassword from "./changePassword";
import Presentation from "./presentation";

const InformationUser = ({ user }) => {
  return (
    <>
      <>
        <div className='col-md-9'>
          <div className='card card-custom gutter-b'>
            <div className='card-header card-header-tabs-line'>
              <div className='card-toolbar'>
                <ul className='nav nav-tabs nav-bold nav-tabs-line'>
                  <li className='nav-item'>
                    <span
                      style={{ cursor: "pointer" }}
                      className='nav-link active'
                      data-toggle='tab'
                      href='#kt_tab_pane_1_4'
                    >
                      <span className='nav-icon'>
                        <i className='flaticon2-user' />
                      </span>
                      <span className='nav-text'>Infos. Personnelles</span>
                    </span>
                  </li>

                  <li className='nav-item'>
                    <span
                      style={{ cursor: "pointer" }}
                      className='nav-link'
                      data-toggle='tab'
                      href='#kt_tab_pane_3_4'
                    >
                      <span className='nav-icon'>
                        <i className='flaticon2-paper ' />
                      </span>
                      <span className='nav-text'>
                        Votre présentation
                        {/* <i className='flaticon2-correct text-success'></i>{" "} */}
                      </span>
                    </span>
                  </li>
                  <li className='nav-item'>
                    <span
                      style={{ cursor: "pointer" }}
                      className='nav-link'
                      data-toggle='tab'
                      href='#kt_tab_pane_2_4'
                    >
                      <span className='nav-icon'>
                        <i className='flaticon2-lock' />
                      </span>
                      <span className='nav-text'>Changer mot de passe </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='card-body'>
              <div className='tab-content'>
                <div
                  className='tab-pane fade show active'
                  id='kt_tab_pane_1_4'
                  role='tabpanel'
                  aria-labelledby='kt_tab_pane_1_4'
                >
                  <ProfileInformation />
                </div>

                <div
                  className='tab-pane fade'
                  id='kt_tab_pane_3_4'
                  role='tabpanel'
                  aria-labelledby='kt_tab_pane_3_4'
                >
                  <Presentation />
                </div>
                <div
                  className='tab-pane fade'
                  id='kt_tab_pane_2_4'
                  role='tabpanel'
                  aria-labelledby='kt_tab_pane_2_4'
                >
                  <ChangePassword />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default InformationUser;
