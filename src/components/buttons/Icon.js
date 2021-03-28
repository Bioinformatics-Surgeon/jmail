import {
  MailOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Input, Space } from "antd";
import { Badge } from "antd-mobile";
import React, { useState } from "react";

const SerachComp = ({ show }) => {
  return (
    <Input
      className={show ? "fadeIn" : ""}
      allowClear
      placeholder="input search text"
      style={{ width: 150 }}
    />
  );
};

const Icon = ({ badgeCount, icon, text = null }) => {
  const [showInput, setShowInput] = useState(false);
  const iconComp = chooseIcon(icon);

  function chooseIcon(icon) {
    switch (icon) {
      case "reload":
        return (
          <ReloadOutlined
            onClick={() => {
              window.location.reload();
            }}
            style={{ ...styles.ml_1 }}
          />
        );
      case "search":
        return (
          <SearchOutlined
            onClick={() => {
              setShowInput(!showInput);
            }}
            style={{ ...styles.ml_1 }}
          />
        );
      case "settings":
        return <SettingOutlined style={{ ...styles.ml_1 }} />;
      case "rightOutline":
        return <RightOutlined style={{ ...styles.ml_1 }} />;
      case "mail":
        return <MailOutlined style={{ ...styles.mr_1 }} />;
      default:
        return <></>;
    }
  }

  const getStyles = () => {
    if (showInput) {
      return Object.assign(styles.ml_1, styles.searchBox);
    } else {
      return { ...styles.ml_1 };
    }
  };

  return (
    <Space direction="horizontal">
      {showInput && <SerachComp show={showInput} />}
      <Badge text={badgeCount} style={getStyles()}>
        {text && text}
        {iconComp}
      </Badge>
    </Space>
  );
};

const styles = {
  ml_1: {
    marginLeft: "16px",
  },
  mr_1: {
    marginRight: "16px",
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
  },
};

export default Icon;
