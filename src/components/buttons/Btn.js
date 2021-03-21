import { Button } from "antd";
import React from "react";

const Btn = ({ size = "default", icon, text, style }) => {
  const hasIcon = icon ? true : false;
  const hasText = text ? true : false;

  return (
    <Button size={size} style={{ ...style }} shape="round" type="primary">
      {hasIcon && icon}
      {hasText && text}
    </Button>
  );
};

export default Btn;
