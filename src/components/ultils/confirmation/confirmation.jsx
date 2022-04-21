import React, { useState } from 'react';
// import { Modal, Button } from 'antd';
import { Popconfirm, Button } from 'antd';
import { ToastMessage } from './../toast/tost';


const Confimation = ({text_confirmation, buttom_name, path, id, message}) => {
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);

    const showPopconfirm = () => {
        setVisible(true);
      };

      const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
          setVisible(false);
          setConfirmLoading(false);

          ToastMessage(message,'success')
          
        }, 1000);
      };
    
      const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
      };
  
    
//   const [visible, setVisible] = React.useState(false);
//   const [confirmLoading, setConfirmLoading] = React.useState(false);

//   const showModal = () => {
//     setVisible(true);
//   };

//   const handleOk = () => {
//     setConfirmLoading(true);
//     setTimeout(() => {
//       setVisible(false);
//       setConfirmLoading(false);
//       // message de suppresion

//     }, 500);
//   };

//   const handleCancel = () => {
//     console.log('Clicked cancel button');
//     setVisible(false);
//   };

  return (
    <>
     <Popconfirm
      title={text_confirmation}
      visible={visible}
      onConfirm={handleOk}
      okButtonProps={{ loading: confirmLoading }}
      onCancel={handleCancel}
    >
      <Button type="primary" onClick={showPopconfirm}>
        {buttom_name}
      </Button>
    </Popconfirm>
      {/* <Button type="primary" onClick={showModal}>
        {buttom_name}
      </Button>
      <Modal
        title="Confirmer cette action"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{text_confirmation}</p>
      </Modal> */}
    </>
  );
}
 
export default Confimation;