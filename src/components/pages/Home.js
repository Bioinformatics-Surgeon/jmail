import { RightOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import { Badge, List } from "antd-mobile";
import React from "react";
import { Link } from "react-router-dom";

const Item = List.Item;

const Home = ({ accounts, handleClick }) => {
  return (
    <div>
      <Space direction="vertical" style={{ width: "100%" }}>
        <List>
          {accounts.map((a, i) => {
            return (
              <Item
                extra={
                  <Space>
                    <Badge>
                      {
                        a.userEmails[0].emails.filter((e) => {
                          return e.isRead === false;
                        }).length
                      }
                    </Badge>

                    {/* <Link to="/account"> */}

                    <Link to={{ pathname: `/account/${i}` }}>
                      <Button
                        onClick={handleClick}
                        type="primary"
                        shape="round"
                        icon={<RightOutlined />}
                        size="small"
                        data={i}
                      />
                    </Link>
                  </Space>
                }
                key={a._id}
                user_id={a._id}
                name={a.user_id}
              >
                {a.userEmail}
              </Item>
            );
          })}
        </List>
      </Space>
    </div>
  );
};

export default Home;
