import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Author = ({ author }) => {
  const [img, setImg] = useState();
  useEffect(async () => {
    if (author.photo !== null) {
      const data = await fetch(`/images/users/${author.photo}`);
      setImg(data.url);
    }
  });
  return (
    <>
      <div className='navbar navbar-expand-sm bg-info border-bottom-2 navbar-list p-0 mb-2 align-items-center'>
        <div className='container page__container'>
          <ul className='nav navbar-nav flex align-items-sm-center'>
            <li className='nav-item navbar-list__item'>
              <div className='media align-items-center'>
                <span className='media-left mr-2'>
                  <Avatar src={img} size={45} icon={<UserOutlined />} />
                </span>
                <div className='media-body'>
                  <Link className='card-title m-0 font-weight-bolder' to='/'>
                    {author.prenom} {author.nom}
                  </Link>
                  <p className='text-50 lh-1 mb-0'>Createur</p>
                </div>
              </div>
            </li>
            {/* <li className='nav-item navbar-list__item'>
                <i className='material-icons text-muted icon--left'>schedule</i>
                2h 46m
              </li>
              <li className='nav-item navbar-list__item'>
                <i className='material-icons text-muted icon--left'>
                  assessment
                </i>
                Beginner
              </li> */}
            {/* <li className='nav-item ml-sm-auto text-sm-center flex-column navbar-list__item'> */}
            {/* <div className='rating rating-24'>
                <div className='rating__item'>
                  <i className='material-icons'>star</i>
                </div>
                <div className='rating__item'>
                  <i className='material-icons'>star</i>
                </div>
                <div className='rating__item'>
                  <i className='material-icons'>star</i>
                </div>
                <div className='rating__item'>
                  <i className='material-icons'>star</i>
                </div>
                <div className='rating__item'>
                  <i className='material-icons'>star_border</i>
                </div>
              </div>
              <p className='lh-1 mb-0'>
                <small className='text-muted'>20 ratings</small>
              </p> */}
            {/* </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Author;
