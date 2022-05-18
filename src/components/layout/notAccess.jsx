import { Result, Button, Typography } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

const { Paragraph, Text } = Typography;

const NotAccess = ({ error }) => {
  return (
    <Result
      status='error'
      title={error}
      subTitle='Please check and modify the following information before resubmitting.'
      extra={[
        <Button type='primary' key='console'>
          Go Console
        </Button>,
        <Button key='buy'>Buy Again</Button>
      ]}
    >
      <div className='desc'>
        <Paragraph></Paragraph>
      </div>
    </Result>
  );
};

export default NotAccess;
