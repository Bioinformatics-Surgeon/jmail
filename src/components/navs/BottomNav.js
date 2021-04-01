import { NavBar, Modal } from "antd-mobile";
import { Space } from "antd";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Btn, Icon } from "../buttons";

const alert = Modal.alert;

const BottomNav = (props) => {
  const { pathname } = props.location;

  const [isOnAccountPage, setIsOnAccountPage] = useState(false);

  const [isOnEmailPage, setIsOnEmailPage] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const nav1 = <Btn text="Account" icon={<Icon icon="mail" />} />;
  const nav2 = <Btn text="Folder" icon={<Icon icon="folder" />} />;
  const nav3 = (
    <Space direction="horizontal">
      <Btn icon={<Icon icon="rollBack-m0" />} />
      <Btn icon={<Icon icon="folder-m0" />} />
      <Btn
        icon={<Icon icon="trash-m0" />}
        handleClick={() => setShowModal(!showModal)}
      />
    </Space>
  );

  const leftComps = isOnAccountPage ? nav2 : isOnEmailPage ? nav3 : nav1;

  useEffect(() => {
    if (
      pathname.includes("/account/0/") ||
      pathname.includes("/account/1/") ||
      pathname.includes("/account/2/")
    ) {
      setIsOnEmailPage(true);
      setIsOnAccountPage(false);
    } else if (pathname.includes("/account")) {
      setIsOnAccountPage(true);
      setIsOnEmailPage(false);
    }
  });

  console.log("what is it: ", showModal);

  return (
    <>
      <NavBar
        style={{
          backgroundColor: "#e4e8ec",
          position: "fixed",
          bottom: 0,
          width: "100%",
        }}
        leftContent={leftComps}
        rightContent={<Btn text="Edit" />}
      />

      <Modal
        visible={showModal}
        transparent
        maskClosable={true}
        closable={true}
        onClose={() => {
          console.log("close modal");
          setShowModal(false);
        }}
        title="Delete this message?"
      >
        <div style={{ height: 200, overflow: "scroll" }}>
          <header>
            Once deleted, a message can be recovered from the the Trash.
          </header>
          <Space
            direction="vertical"
            style={{ paddingTop: "32px", width: "100%" }}
          >
            <hr />
            <Btn
              text="Delete Message"
              style={{ width: "100%" }}
              handleClick={() => setShowModal(!showModal)}
            />
            <Btn
              text="Cancel"
              type=""
              style={{
                width: "100%",
                backgroundColor: "rgb(228, 232, 236)",
              }}
              handleClick={() => setShowModal(!showModal)}
            />
          </Space>
        </div>
      </Modal>
    </>
  );
};

export default withRouter(BottomNav);
