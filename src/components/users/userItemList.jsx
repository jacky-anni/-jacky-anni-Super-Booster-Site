import { Fragment } from "react";
import QuickAction from "./quickActions";
import { Link } from "react-router-dom";

const UserItemList = ({ user }) => {
  return (
    <>
      <div className='d-flex align-items-center'>
        <div className='symbol symbol-circle symbol-32 flex-shrink-0 mr-3'>
          <img
            alt='Pic'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTo8ot81o5G-DZLv5GatY5S5Jsc2rHobmXkQ&usqp=CAU'
            className='symbol-circle'
          />
        </div>

        <div className='d-flex flex-wrap flex-row-fluid'>
          <div className='d-flex flex-column pr-5 flex-grow-1'>
            <Link
              to={`/profile/${user.username}`}
              className='text-dark text-hover-primary mb-1 font-weight-bolder font-size-lg'
            >
              {user.prenom} {user.nom}
            </Link>
            <span className='text-muted font-weight-bold'>{user.email}</span>
          </div>

          <div className='d-flex align-items-center py-2'>
            <span className=' badge badge-success font-weight-bolder font-size-sm pr-6'>
              Activer
            </span>
            <QuickAction user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserItemList;
