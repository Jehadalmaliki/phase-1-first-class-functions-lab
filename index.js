// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Invoke the first function in the array
const drivers = ['Hamilton', 'Verstappen', 'Leclerc', 'Sainz', 'Alonso'];
const firstTwoDrivers = selectingDrivers[0](drivers);
console.log(firstTwoDrivers); // ['Hamilton', 'Verstappen']

// Invoke the second function in the array
const lastTwoDrivers = selectingDrivers[1](drivers);
console.log(lastTwoDrivers); // ['Sainz', 'Alonso']

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  }
}

function fareDoubler(fare) {
  return fare * 2;
}
function fareTripler(fare) {
  return fare * 3;
}
function selectDifferentDrivers(arrayOfDrivers, callback) {
  return callback(arrayOfDrivers);
}
