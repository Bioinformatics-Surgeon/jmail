import { NavBar } from "antd-mobile";
import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "../buttons";

const rightIcons = ["search", "reload", "settings"];

const TopNav = ({ unReads }) => {
  return (
    <NavBar
      style={{ backgroundColor: "#000" }}
      leftContent={
        <Link to={`/home`}>
          <Icon badgeCount={unReads} text="JQ Mail" />
        </Link>
      }
      rightContent={rightIcons.map((icon, i) => {
        return <Icon key={i} icon={icon} />;
      })}
    />
  );
};

export default TopNav;
