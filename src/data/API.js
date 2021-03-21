const faker = require("faker");

const getRandomNum = () => {
  return Math.random() * (50 - 10) + 10;
};

const getEmails = () => {
  let emails = [];

  for (let i = 0; i < getRandomNum(); i++) {
    emails.push({
      _id: i,
      title: faker.lorem.words(),
      body: faker.lorem.paragraph(),
      from: faker.name.findName(),
      email: faker.lorem.paragraph(),
      time: faker.date.recent(),
      isRead: faker.random.boolean(),
    });
  }

  return emails;
};

const makeAccount = () => {
  return {
    _id: faker.random.uuid(),
    accountName: faker.name.findName(),
    userName: faker.internet.userName(),
    userEmail: faker.internet.email(),
    userEmails: getEmails(),
  };
};

export default {
  getInitialAccounts: () => {
    let data = [];
    for (let i = 0; i < 3; i++) {
      data.push(makeAccount());
    }
    return data;
  },
};
