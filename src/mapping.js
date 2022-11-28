// Map data to frontend format. The main element is location key and we need to map all data to it. We will have 5 objects at the end.

const loc = [
  {
    location_key: [32, 22, 11],
    autoassign: 1,
  },
  {
    location_key: [41, 42],
    autoassign: 1,
  },
];

const bulkConfig = [
  {
    dataValues: {
      config_key: 100,
    },
  },
  {
    dataValues: {
      config_key: 200,
    },
  },
];

function mapping(loc, bulkConfig) {
  return loc.reduce((prev, curr, locIndx) => {
    return [
      ...prev,
      ...curr.location_key.map((locElem) => ({
        config_key: bulkConfig[locIndx].dataValues.config_key,
        location_key: locElem,
        autoassign: curr.autoassign,
      })),
    ];
  }, []);
}

module.exports = {
  loc,
  bulkConfig,
  mapping,
};
