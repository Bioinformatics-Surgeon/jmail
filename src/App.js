import { NavBar } from "antd-mobile";
import React, { useEffect, useState } from "react";
import { Icon, Btn } from "./components/buttons";
import HomeList from "./components/HomeList";
import "./css/App.css";
import API from "./data/API";

const rightIcons = ["search", "reload", "settings"];

function App() {
  let count = 0;
  let unReadEmails = [];
  const [unReads, setUnReads] = useState(0);
  const [accounts, setAccount] = useState(API.getInitialAccounts());

  useEffect(() => {
    accounts.forEach((account) => {
      unReadEmails = account.userEmails.filter((email) => {
        return email.isRead === false;
      });
      count += unReadEmails.length;
    });

    setUnReads(count);
  }, [accounts]);

  console.log("Acounts: ", accounts);
  return (
    <div>
      <NavBar
        style={{ backgroundColor: "#000" }}
        leftContent={<Icon badgeCount={unReads} text="JQ Mail" />}
        rightContent={rightIcons.map((icon, i) => {
          return <Icon key={i} icon={icon} />;
        })}
      />
      <HomeList accounts={accounts} />
      <NavBar
        style={{ backgroundColor: "#e4e8ec" }}
        leftContent={<Btn text="Account" icon={<Icon icon="mail" />} />}
        rightContent={<Btn text="Edit" />}
      />
    </div>
  );
}

export default App;
