import { Fragment } from "react";
const UserProfileBar = () => {
  return (
    <>
      <div className='nav-item dropdown'>
        <a
          href='#'
          className='nav-link d-flex align-items-center dropdown-toggle'
          data-toggle='dropdown'
          data-caret='false'
        >
          <div
            className='btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2'
            id='kt_quick_user_toggle'
          >
            <span className='text-muted font-weight-bold font-size-base d-none d-md-inline mr-1'>
              Hi,
            </span>
            <span className='text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3'>
              Sean
            </span>
            <span className='symbol symbol-35 symbol-light-success'>
              <span className='symbol-label font-size-h5 font-weight-bold'>
                S
              </span>
            </span>
          </div>
          {/* ddddd
          <span className='avatar avatar-sm mr-8pt2'>
            <span className='avatar-title rounded-circle bg-primary'>
              <i className='material-icons'>account_box</i>
            </span>
          </span> */}
        </a>
        <div className='dropdown-menu dropdown-menu-right'>
          <div className='dropdown-header'>
            <strong>Account</strong>
          </div>
          <a className='dropdown-item' href='edit-account.html'>
            Edit Account
          </a>
          <a className='dropdown-item' href='billing.html'>
            Billing
          </a>
          <a className='dropdown-item' href='billing-history.html'>
            Payments
          </a>
          <a className='dropdown-item' href='login.html'>
            Logout
          </a>
        </div>
      </div>
    </>
  );
};

export default UserProfileBar;
