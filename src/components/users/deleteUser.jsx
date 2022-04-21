import React, { Component } from "react";
import { Modal, Button } from "antd";
// import { ToastMessage } from './../ultils/toast/tost';
import Confimation from "./../ultils/confirmation/confirmation";

const DeleteUser = ({user}) => {
  return (
    <Confimation
      text_confirmation={"Supprimer cet utilisateur ? "}
      buttom_name='supp'
      path={""}
      id={user}
      message = {'utilisateur supprime avec succes'}
    />
  );
};

export default DeleteUser;
