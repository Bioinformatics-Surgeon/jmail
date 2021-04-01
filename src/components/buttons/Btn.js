import { Button } from "antd";
import React from "react";

const Btn = ({
  size = "default",
  icon,
  text,
  style,
  type = "primary",
  handleClick = () => console.log("you clicked me"),
}) => {
  const hasIcon = icon ? true : false;
  const hasText = text ? true : false;

  return (
    <Button
      onClick={handleClick}
      size={size}
      style={{ ...style }}
      shape="round"
      type={type}
    >
      {hasIcon && icon}
      {hasText && text}
    </Button>
  );
};

export default Btn;
