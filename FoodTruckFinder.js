var Table = require('cli-table');
var getTodaysFoodTrucks = require('./getTodaysFoodTrucks');

getTodaysFoodTrucks()
  .then(foodTrucks => {
    var table = new Table({
      head: ['Name', 'Address'],
      colWidths: [30, 50]
    });
    foodTrucks.forEach(
      entry => table.push([entry.applicant, entry.location])
    );
    console.log(table.toString());    
  })
  .catch(err => console.log(err));


// to run locally, first install node and npm. then:
// $ npm install request && node FoodTruckFinder.js