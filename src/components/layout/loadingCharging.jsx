import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const LoadingCharging = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 30 }} spin />;
  return (
    <center>
      <Spin indicator={antIcon} />
      <br />
      <p className='font-size-h6 font-weight-bold'>Chargement en cours...</p>
    </center>
  );
};

export default LoadingCharging;
