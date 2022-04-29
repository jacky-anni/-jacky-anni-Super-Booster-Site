import React, { Fragment, useState, useEffect } from "react";
import cookie from "react-cookies";
import { Modal, Button } from "antd";
import UserItemList from "./userItemList";

const CreateUserConfirmation = ({ user }) => {
  return (
    <>
      {user ? (
        <div className='col-xl-12'>
          <div className='card card-custom gutter-b'>
            <div className='card-body d-flex align-items-center py-5 py-lg-10'>
              <div className>
                <h3 className='pb-1 text-dark-75 font-weight-bolder font-size-h5'>
                  <i className='fa fa-user'></i> {user.prenom} {user.nom}
                </h3>
                <p className='m-0 text-dark-50 font-weight-bold font-size-lg'>
                  Now that I’m done thoroughly mangling that
                  <a href='#' className='text-primary'>
                    vague metaphor
                  </a>
                  . You know you need to start
                  <a href='#' className='pr-1 text-primary'>
                    blogging
                  </a>
                  cool stuff.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CreateUserConfirmation;
