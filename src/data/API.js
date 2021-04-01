import faker from "faker";
let accounts = [];

const getRandomNum = () => {
  return Math.floor(Math.random() * (10 - 2) + 2);
};

const getRandomMail = () => {
  let emails = [];

  for (let i = 0; i < getRandomNum(); i++) {
    emails.push({
      _id: faker.datatype.uuid(),
      title: faker.commerce.productName(),
      body: faker.commerce.productDescription(),
      from: faker.name.findName(),
      email: faker.lorem.paragraph(),
      time: faker.date.recent(),
      isRead: faker.datatype.boolean(),
      thumb: faker.image.avatar(),
      attachments: getRandomNum(),
    });
  }

  return emails;
};

function getEmails() {
  return {
    0: {
      name: "Inbox",
      icon: "inbox",
      emails: getRandomMail(),
      _id: faker.datatype.uuid(),
    },
    1: {
      name: "Drafts",
      icon: "draft",
      emails: getRandomMail(),
      _id: faker.datatype.uuid(),
    },
    2: {
      name: "Sent",
      icon: "sent",
      emails: getRandomMail(),
      _id: faker.datatype.uuid(),
    },
    3: {
      name: "Trash",
      icon: "trash",
      emails: getRandomMail(),
      _id: faker.datatype.uuid(),
    },
    4: {
      name: "Junk",
      icon: "junk",
      emails: getRandomMail(),
      _id: faker.datatype.uuid(),
    },
    5: {
      name: "My Folder",
      icon: "folder",
      emails: getRandomMail(),
      _id: faker.datatype.uuid(),
    },
    6: {
      name: "Person Folder",
      icon: "folder",
      emails: getRandomMail(),
      _id: faker.datatype.uuid(),
    },
  };
}

const makeAccount = () => {
  return {
    _id: faker.datatype.uuid(),
    accountName: faker.name.findName(),
    userName: faker.internet.userName(),
    userEmail: faker.internet.email(),
    userEmails: getEmails(),
  };
};

function makeInitialAccounts() {
  let data = [];
  for (let i = 0; i < 3; i++) {
    data.push(makeAccount());
  }

  accounts = [...data];

  console.log("API ACCOUNTS :", accounts);
}

makeInitialAccounts();

const API = {
  getInitialAccounts: () => {
    return new Promise((reslove, reject) => {
      if (accounts.length > 0) {
        reslove(accounts);
      } else {
        reject("Error occured when calling getAccounts");
      }
    });
  },

  getAccount: (user_index) => {
    return new Promise((resolve, reject) => {
      if (user_index) {
        resolve(accounts[user_index]);
      } else {
        reject("Error with handleAccount()");
      }
    });
  },

  getEmail: (account_id, email_id) => {
    return new Promise((resolve, reject) => {
      if (account_id && email_id) {
        let data = null;

        Object.values(accounts[account_id].userEmails).forEach((account) => {
          // console.log("account: ", account);
          Object.values(account.emails).forEach((email) => {
            // console.log("email: ", email);
            if (email._id === email_id) {
              data = email;
            } else {
              return;
            }
          });
        });

        console.log("data", data);
        resolve(data);
      } else {
        reject("Error with getEmailById");
      }
    });
  },
};

export default API;
