import React from "react";

import { List } from "antd-mobile";
import faker from "faker";

const Item = List.Item;

const HomeList = ({ accounts }) => {
  return (
    <List>
      {accounts.map((acct) => {
        return (
          <Item
            extra={acct.userEmails.length}
            arrow="horizontal"
            onClick={() => {}}
            key={acct._id}
          >
            {acct.userEmail}
          </Item>
        );
      })}
    </List>
  );
};

export default HomeList;
