import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import ReactLoading from "react-loading";

const LoadingCharging = ({
  type = "spin",
  color = "red",
  height = "3%",
  width = "3%",
  text = "Chargement en cours..."
}) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 30 }} spin />;
  return (
    <center>
      <ReactLoading type={type} color={color} height={height} width={width} />
      <p className='font-size-h6 font-weight-bold' style={{ color: color }}>
        {text}
      </p>

      {/* <Spin indicator={antIcon} />
      <br />
      <p className='font-size-h6 font-weight-bold'>Chargement en cours...</p> */}
    </center>
  );
};

export default LoadingCharging;
