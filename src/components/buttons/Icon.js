import {
  MailOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  DeleteOutlined,
  InboxOutlined,
  FolderOutlined,
  FileOutlined,
  SendOutlined,
  FrownOutlined,
  SettingOutlined,
  LeftCircleOutlined,
  RollbackOutlined,
  PaperClipOutlined,
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
      case "leftOutline":
        return <LeftCircleOutlined style={{ ...styles.ml_1 }} />;
      case "inbox":
        return <InboxOutlined style={{ ...styles.mr_1 }} />;
      case "mail":
        return <MailOutlined style={{ ...styles.mr_1 }} />;
      case "trash":
        return <DeleteOutlined style={{ ...styles.mr_1 }} />;
      case "trash-m0":
        return <DeleteOutlined />;
      case "draft":
        return <FileOutlined style={{ ...styles.mr_1 }} />;
      case "folder":
        return <FolderOutlined style={{ ...styles.mr_1 }} />;
      case "folder-m0":
        return <FolderOutlined />;
      case "sent":
        return <SendOutlined style={{ ...styles.mr_1 }} />;
      case "junk":
        return <FrownOutlined style={{ ...styles.mr_1 }} />;
      case "clip":
        return <PaperClipOutlined style={{ ...styles.mr_1 }} />;
      case "rollBack":
        return <RollbackOutlined style={{ ...styles.mr_1 }} />;
      case "rollBack-m0":
        return <RollbackOutlined />;
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
