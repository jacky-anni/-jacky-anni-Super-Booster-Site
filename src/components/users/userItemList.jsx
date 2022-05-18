import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getImage } from "./../ultils/getImage";
import { Avatar } from "antd";
import { Tag } from "antd";
import Active from "./active";
import Disable from "./disable";
import Delete from "./delete";
import EditUser from "./edit";

const UserItemList = ({ user }) => {
  const [img, setImg] = useState(false);

  useEffect(async () => {
    if (user.photo !== null) {
      const data = await fetch(`/images/users/${user.photo}`);
      setImg(data.url);
    }
  });

  return (
    <>
      <div className='d-flex'>
        {/*begin::Pic*/}
        <div className='flex-shrink-0 mr-3 mt-1'>
          <div className='symbol symbol-50 symbol-lg-120 symbol-circle'>
            <Avatar src={img} size={43} />
          </div>
        </div>
        {/*end::Pic*/}
        {/*begin: Info*/}
        <div className='flex-grow-1'>
          {/*begin::Title*/}
          <div className='d-flex align-items-center justify-content-between flex-wrap'>
            <div className='d-flex flex-column pr-5 flex-grow-1'>
              <Link
                to={`/dashboard/profile/${user.username}`}
                className='text-dark text-hover-primary  font-weight-bolder font-size-sms'
              >
                <span className='mr-3'>
                  {user.prenom} {user.nom}
                </span>
              </Link>
              <div>
                <span className='text-muted font-weight-bold mr-3'>
                  {user.email}
                </span>
                {user.role === "Responsable" ? (
                  <Tag color='success'>{user.role}</Tag>
                ) : null}

                {user.role === "Formateur" ? (
                  <Tag color='geekblue'>{user.role}</Tag>
                ) : null}

                {user.role === "Etudiant" ? (
                  <Tag color='cyan'>{user.role}</Tag>
                ) : null}
              </div>
            </div>

            <div className='my-lg-0 my-1'>
              {!user.active ? (
                <Active user_={user} />
              ) : (
                <Disable user_={user} />
              )}

              <EditUser user_={user} />

              <Delete user_={user} />
            </div>
            {/*end::Actions*/}
          </div>
          {/*end::Content*/}
        </div>
        {/*end::Info*/}
      </div>
    </>
  );
};

export default UserItemList;
