import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BottomNav, TopNav } from "./components/navs";
import { Account, Home } from "./components/pages";
import "./css/App.css";
import API from "./data/API";

function App(props) {
  const [unReads, setUnReads] = useState(0);
  const [accounts, setAccount] = useState([]);

  useEffect(() => {
    API.getInitialAccounts()
      .then((res) => {
        setAccount(res);
      })
      .catch((err) => console.log(err));
    return () => {
      setAccount([]);
    };
  }, []);

  useEffect(() => {
    let count = 0;
    let unReadEmails = [];
    accounts.forEach((a) => {
      unReadEmails = a.userEmails[0].emails.filter((email) => {
        return email.isRead === false;
      });
      count += unReadEmails.length;
    });

    setUnReads(count);
  }, [accounts]);

  return (
    <Router>
      <div>
        <TopNav unReads={unReads} />
        <Switch>
          <Route path="/account/:id">
            <Account />
          </Route>
          <Route path="/home">
            <Home accounts={accounts} />
          </Route>
          <Route path="/">
            <Home accounts={accounts} />
          </Route>
        </Switch>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
