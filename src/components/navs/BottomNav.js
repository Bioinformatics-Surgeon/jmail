import { NavBar } from "antd-mobile";
import React from "react";
import { Btn, Icon } from "../buttons";

const BottomNav = () => {
  return (
    <NavBar
      style={{
        backgroundColor: "#e4e8ec",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
      leftContent={<Btn text="Account" icon={<Icon icon="mail" />} />}
      rightContent={<Btn text="Edit" />}
    />
  );
};

export default BottomNav;
