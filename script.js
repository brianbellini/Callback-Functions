// Callback functions
// A callback function is a function that's passed to another function as an argument.
/*
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

//Synchronous Code
const colors = ['red', 'green', 'blue'];

console.log('BEFORE the forEach...');

colors.forEach(function(color, idx) {
	console.log(`${idx + 1} - ${color}`);
});

console.log('AFTER the forEach...');

//Asynchronous code
console.log('Code before the asynchronous function call');

setTimeout(function() {
  console.log('setTimeout code')
});

console.log('Code after the asynchronous function call');
*/


//////////////////////////////////////////////////
function step1(cb) {
  setTimeout(function() {
    console.log('STEP 1 COMPLETE');
    cb()
  }, 750);
}

function step2(cb) {
  setTimeout(function() {
    console.log('STEP 2 COMPLETE');
    cb()
  }, 500);
}
	
function step3(cb) {
  setTimeout(function() {
    console.log('STEP 3 COMPLETE');
    cb()
  }, 250);
}


step1(function() {
step2(function() {
step3(function() {
  console.log('FINISHED');
});
});
});
