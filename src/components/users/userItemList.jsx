import { Fragment } from "react";
import QuickAction from "./quickActions";
import { Link } from "react-router-dom";

const UserItemList = ({ user }) => {
  return (
    <>
      <div className='d-flex align-items-center'>
        {/*begin::Symbol*/}
        <div className='symbol symbol-circle symbol-32 flex-shrink-0 mr-3'>
          <img alt='Pic' src={user.avatar_url} className='symbol-circle' />
        </div>
        {/*end::Symbol*/}
        {/*begin::Content*/}
        <div className='d-flex flex-wrap flex-row-fluid'>
          {/*begin::Text*/}
          <div className='d-flex flex-column pr-5 flex-grow-1'>
            <Link
              to={`/profile/${user.login}`}
              className='text-dark text-hover-primary mb-1 font-weight-bolder font-size-lg'
            >
              {user.prenom} {user.nom}
            </Link>
            <span className='text-muted font-weight-bold'>{user.email}</span>
          </div>
          {/*end::Text*/}
          {/*begin::Section*/}
          <div className='d-flex align-items-center py-2'>
            {/*begin::Label*/}
            <span className=' badge badge-success font-weight-bolder font-size-sm pr-6'>
              Activer
            </span>
            <QuickAction user={user} />
          </div>
          {/*end::Section*/}
        </div>
        {/*end::Content*/}
      </div>
    </>
  );
};

export default UserItemList;
