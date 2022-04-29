import { Fragment, useEffect } from "react";
import Users from "./users";
import { connect } from "react-redux";
import PageTitle from "./../partials/pageTile";
import Head from "./../partials/head";
import CreateUser from "./create";

const UserHome = () => {
  return (
    <>
      <Head />
      <PageTitle title='Utilisateurs' />
      <div className='card card-custom'>
        <div className='card-header flex-wrap border-0 pt-6 pb-0'>
          <div className='card-title'>
            <h3 className='card-label'>
              Spanish Translation
              <span className='d-block text-muted pt-2 font-size-sm'>
                Language translations for the texts and messages
              </span>
            </h3>
          </div>
          <div className='card-toolbar'>
            <CreateUser />
          </div>
        </div>
        <div className='card-body'>
          <div className='row' />
          <Users />
          {/*end: Datatable*/}
        </div>
      </div>
    </>
  );
};

export default UserHome;
