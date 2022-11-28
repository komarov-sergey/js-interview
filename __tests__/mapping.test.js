const { mapping, loc, bulkConfig } = require("../src/mapping");

test("mapping 2 arrays", () => {
  let output = [
    { config_key: 100, location_key: 32, autoassign: 1 },
    { config_key: 100, location_key: 22, autoassign: 1 },
    { config_key: 100, location_key: 11, autoassign: 1 },
    { config_key: 200, location_key: 41, autoassign: 1 },
    { config_key: 200, location_key: 42, autoassign: 1 },
  ];

  expect(mapping(loc, bulkConfig)).toEqual(output);
});
