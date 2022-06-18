import * as React from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

export default function Loader() {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return (
    <>
      <Stack
        sx={{ width: "100%", height: "10px", color: "grey.500" }}
        style={{
          position: "absolute",
          top: "0px",
          right: "0px",
          left: "0px",
          zIndex: 100
        }}
      >
        <LinearProgress color='primary' />
      </Stack>

      {/* <Spin
        indicator={antIcon}
        style={{
          position: "absolute",
          top: "0px",
          right: "10px",
          zIndex: 100
        }}
      /> */}
    </>
  );
}
