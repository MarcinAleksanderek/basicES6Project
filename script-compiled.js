'use strict';

//Zad1
//return 'Hello Wrold' without join and concat
var welcome = function welcome() {
  var hi = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
  var world = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'World';
  return console.log(hi + ' ' + world);
};
welcome();

//Zad2
//multiply two numbers, if only one is selected then second one should be equal to 1
var multiply = function multiply() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return console.log('' + x * y);
};
multiply(12, 3);

//Zad3
//return average from number of arguments
var average = function average() {
  for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
    rest[_key] = arguments[_key];
  }

  return rest.reduce(function (a, b) {
    return a + b;
  }, 0) / rest.length;
};
average(1, 3, 6, 6);

//Zad4
//Spread the Table to average function
var grades = [5, 5, 5, 4, 3, 3];
average.apply(undefined, grades);

//Zad5
//Use destructuring to get Name and Surname from Array 
var tablica1 = [1, 4, 'Iwona', false, 'Nowak'];
var name = tablica1[2],
    surname = tablica1[4];

console.log(name + ' ' + surname);
