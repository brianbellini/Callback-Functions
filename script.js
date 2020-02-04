// Callback functions
// A callback function is a function that's passed to another function as an argument.

function add(a, b) {
return a + b;
}

function subtract(a, b) {
return a - b;
}

function compute(a, b, op) {
return op(a, b);
}

let result1 = compute(10, 5, add);
let result2 = compute(10, 5, subtract);


const cars = [
  { make: 'Toyota', yrsOld: 5, mileage: 92399 },
  { make: 'Ford', yrsOld: 12, mileage: 255005 },
  { make: 'Ferrari', yrsOld: 9, mileage: 12966 },
  { make: 'Subaru', yrsOld: 9, mileage: 111266 },
  { make: 'Toyota', yrsOld: 2, mileage: 41888 },
  { make: 'Tesla', yrsOld: 3, mileage: 57720 }
];

const wellDrivenCars = cars.filter(function(car) {
return ((car.mileage / car.yrsOld) > 20000);
})

wellDrivenCars.forEach(function(car) {
  console.log(car);
});