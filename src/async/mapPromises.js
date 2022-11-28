// You have 2 functions which return promises. Map data from users and userStatuses to get array of users with id, name, isActive
const users = [
  {
    id: 1,
    name: "Jack",
  },
  {
    id: 2,
    name: "John",
  },
  {
    id: 3,
    name: "Mike",
  },
];

const userStatuses = [
  {
    id: 1,
    isActive: true,
  },
  {
    id: 2,
    isActive: true,
  },
  {
    id: 3,
    isActive: false,
  },
];

const getUsers = () => {
  return new Promise((resolve) => {
    resolve(users);
  });
};

const getUserStatuses = () => {
  return new Promise((resolve) => {
    resolve(userStatuses);
  });
};

function mapPromises(prm1, prm2) {
  return Promise.all([prm1(), prm2()]).then((val) =>
    val[0].map((elem, i) => ({ ...elem, ...val[1][i] }))
  );
}

module.exports = {
  getUsers,
  getUserStatuses,
  mapPromises,
};
