import { Collapse, Space, Spin, Row, Col } from "antd";
import { Card, List, WhiteSpace } from "antd-mobile";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../data/API";
import { Btn, Icon } from "../buttons";
const Item = List.Item;

const { Panel } = Collapse;

const Account = (props) => {
  const [account, setAccount] = useState({});
  const [userEmail, setUserEmail] = useState("");
  const [accountLoaded, setaccountLoaded] = useState(false);
  const [activePanel, setActivePanel] = useState(undefined);

  const { id } = useParams();
  const route = `/account/${id}`;

  useEffect(() => {
    API.getAccount(id)
      .then((res) => {
        setAccount(res);
        setUserEmail(res.userEmail);
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
        <Collapse
          accordion
          id="collapse"
          expandIconPosition="right"
          onChange={(e) => {
            console.log(e);
            setActivePanel(e);
          }}
        >
          {Object.keys(account.userEmails).map((k) => {
            const emails = account.userEmails[k].emails;
            const folder_id = account.userEmails[k]._id;
            const folderName = account.userEmails[k].name;
            const icon = account.userEmails[k].icon;

            return (
              <Panel
                key={folder_id}
                className={activePanel === folder_id ? "activePanel" : ""}
                header={
                  <div>
                    <Icon icon={icon} />
                    {folderName}
                  </div>
                }
                forceRender={true}
                style={{ padding: "0px" }}
              >
                {emails.map((email) => {
                  return (
                    <div key={email._id}>
                      <WhiteSpace size="lg" />
                      <Card full>
                        <Card.Header
                          title={<h4>{email.title}</h4>}
                          thumb={email.thumb}
                          thumbStyle={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                          }}
                          extra={
                            <h6>{new Date(email.time).toLocaleTimeString()}</h6>
                          }
                        />
                        <Card.Body>
                          <div>{email.body}</div>
                        </Card.Body>
                        <Card.Footer
                          extra={
                            <Link
                              to={{ pathname: `/account/${id}/${email._id}` }}
                            >
                              <Btn text="View" />
                            </Link>
                          }
                        />
                      </Card>
                    </div>
                  );
                })}
              </Panel>
            );
          })}
        </Collapse>
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
export default Account;
