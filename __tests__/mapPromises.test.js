const {
  getUsers,
  getUserStatuses,
  mapPromises,
} = require("../src/async/mapPromises");

test("mapping 2 promises", async () => {
  let output = [
    { id: 1, name: "Jack", isActive: true },
    { id: 2, name: "John", isActive: true },
    { id: 3, name: "Mike", isActive: false },
  ];

  expect(await mapPromises(getUsers, getUserStatuses)).toEqual(output);
});
