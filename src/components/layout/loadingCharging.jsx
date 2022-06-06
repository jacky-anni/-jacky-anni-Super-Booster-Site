import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const LoadingCharging = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;
  return (
    <center>
      <Spin indicator={antIcon} />
      <br />
      <br />
      <p className='font-size-h6'>Chargement en cours...</p>
    </center>
  );
};

export default LoadingCharging;
