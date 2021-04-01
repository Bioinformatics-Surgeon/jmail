import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../data/API";
import { Collapse, Space, Spin, Row, Col, Button } from "antd";

import { Card, List, WhiteSpace, Badge } from "antd-mobile";
import { Btn, Icon } from "../buttons";

const Email = () => {
  const { id } = useParams();
  const { email_id } = useParams();

  const [account, setAccount] = useState({});
  const [accountLoaded, setaccountLoaded] = useState(false);

  console.log("id: ", id);
  console.log("email_id: ", email_id);

  useEffect(() => {
    API.getEmail(id, email_id)
      .then((res) => {
        console.log(res);
        setAccount(res);
        setaccountLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      setAccount([]);
    };
  }, []);

  return (
    <>
      {accountLoaded ? (
        <Row align="top" justify="center" style={{ height: "100vh" }}>
          <Col>
            <Card full>
              <Card.Header
                style={{ backgroundColor: "rgb(228, 232, 236)" }}
                title={
                  <Space
                    direction="vertical"
                    style={{
                      width: "250px",
                    }}
                  >
                    <h3>{account.title}</h3>
                    <h5>{new Date(account.time).toLocaleTimeString()}</h5>
                  </Space>
                }
                extra={
                  <Space>
                    <Badge>{account.attachments}</Badge>
                    <Icon icon="clip" />
                  </Space>
                }
              />
              <Card.Header
                title={
                  <Space direction="horizontal">
                    <h4 style={{ margin: "0px" }}>From: </h4>
                    <Button
                      shape="round"
                      style={{ backgroundColor: "rgb(228, 232, 236)" }}
                    >
                      <h4>{account.from}</h4>
                    </Button>
                  </Space>
                }
                extra={
                  <Space>
                    <Icon icon="rightOutline" text="Details" />
                  </Space>
                }
              />
              <Card.Body>
                <p style={{ fontSize: "20px" }}>{account.body}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <Row align="middle" justify="center" style={{ height: "100vh" }}>
          <Col>
            <Spin size="large" />
          </Col>
        </Row>
      )}
    </>
  );
};

export default Email;
