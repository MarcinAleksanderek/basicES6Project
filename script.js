//Zad1
//return 'Hello Wrold' without join and concat
const welcome = (hi = 'Hello', world='World') => console.log(`${hi} ${world}`);
welcome(); 

//Zad2
//multiply two numbers, if only one is selected then second one should be equal to 1
const multiply = (x=1, y=1) => console.log (`${x*y}`);
multiply(12, 3);

//Zad3
//return average from number of arguments
const average = (...rest) => {
	let total = 0;
	rest.forEach(arg => {total += arg});
	console.log(total/rest.length);
}
average(1, 3, 6, 6);

//Zad4
//Spread the Table to average function
const grades = [5, 5, 5, 4, 3, 3];
average(...grades);


//Zad5
//Use destructuring to get Name and Surname from Array 
const tablica1 = [1, 4, 'Iwona', false, 'Nowak'];
const [, , name, ,surname] = tablica1;
console.log(`${name} ${surname}`);
