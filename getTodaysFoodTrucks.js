var request = require('request-promise');
var moment = require('moment');

/**
 * Retrieves the first 10 food trucks alphabetically that are available to eat at today.
 */
module.exports = async function getTodaysFoodTrucks() {
  var foodTruckEntries = JSON.parse(
    await request('http://data.sfgov.org/resource/bbb8-hzi6.json')
  );

  // remove entries that aren't from today.
  var currentDayOfTheWeek = moment().format('dddd');
  foodTruckEntries = foodTruckEntries.filter(
    e => e.dayofweekstr === currentDayOfTheWeek
  );

  // sort by name
  foodTruckEntries = foodTruckEntries.sort((a, b) => {
    if (a.applicant < b.applicant)
      return -1;
    if (a.applicant > b.applicant)
      return 1;
    return 0;
  });

  // only return 10 results
  foodTruckEntries = foodTruckEntries.splice(0, 10);

  return foodTruckEntries;
};
