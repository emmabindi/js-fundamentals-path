// JS Drills

// Sometimes you learn how to do things before you fully understand how they work. Coding is like this a lot. There are many things that I learned how to do well before I asked how they function. There are still plenty more things where that is the case for me. You merely push back that barrier slowly, but the unknown remains. In that vein, these are exercises that are designed to get you familiar with the lingo of arrays, objects, and functions, and get you repeatedly using them. It’s not a test, or even a challenge - it’s practice. Consider it like doing a forehand drill in tennis, or scales in music. You wouldn’t be upset making some mistakes while you practice, because you know that this is the thing you need to work toward being competent, and you allow yourself to fail and learn. This is exactly the same. 

// Learn and fail as you need here, because the bigger tests are to come. As you get more comfortable with the basic syntax, and getting your code to work, you will have more brain space to think about what it is it all means. (And we are more than happy to keep explaining that at the same time too!)

// Follow the instructions carefully. They will be repetitive and are not designed to be interesting, but rather build up ‘muscle memory’. *Each* line of code that you write, you *must* save the file and run the code. If there are *any* errors, you fix them then and there. If in doubt, puts out the structure you have made to make sure that it is what you hoped it was. I’m looking for accuracy - I want the instructions followed precisely. It will be your choice of class and variable names (etc), but the functioning and number of attributes called for are immutable. Ideally you’ll want the work to be checked, so copy and paste this text into a file and comment it out, so that I can check it easily - put the answer directly below the question.

// 1. Make a function that takes two arguments, and returns the result of them added together.

function adder(x,y) {
  return x + y
}

// console.log(adder(3,6)) // => 9

// 2. Call the above function four times with different inputs each time. Make at least some of the inputs floats. 

// console.log(adder(3,6)); // => 9
// console.log(adder(5,9)); // 14 
// console.log(adder((6.1), (3.5))); // 9.6
// console.log(adder(9,20.4));  // 29.4

// 3. Define two integer and two float variables, and use them as arguments to this method you have made.

const num1 = 5;
const num2 = 3;
const num3 = 4.5;
const num4 = 1.5;

// console.log(adder(num1,num2)); 
// console.log(adder(num3,num4));  

// ============================================
// 4. Make an object (in ruby this would be a hash) with four keys, and have the keys be three different data types.

wine = {
  type: 'Red',
  price: 35.50,
  varietal: 'Malbec',
  region: 'Argentina',
}
// 5. Access two of the values in your object, and log them to the screen.

console.log(wine.price)
console.log(wine.varietal)
// ============================================
// 6. Create another object with one key and value pair.
pet = {
  name: 'Aria',
}
// 7. Define a function that takes that type of object as the input, and log out the value of that key.
function printer(pet) {
  console.log(pet['name']);
}

printer(pet)
// ============================================
// 8. Make an object with three keys and values, and assign it to a variable.

// OBJECT LITERAL:
// const car = {
//   make: make,
//   model: model,
//   color: color,
// }

// object constructor method:
function Car(make, model, color) {
  this.make = make;
  this.model = model;
  this.color = color;
}

// 9. Make four more objects with the same keys.

let dreamCar = new Car('Mercedes AMG','G Wagon', 'Gangsta Black')

let shitBox = new Car('Holden', 'Barina', 'Faded purple')

console.log(dreamCar)

// 10. Access a value from three of these objects.

console.log(dreamCar.model);
console.log(shitBox.color);
// =========================================
// 11. Define a variable and assign to it an empty array.

const favTunes = [];

// 12. Define a function that takes an array and an object as arguments. The function will push the object into the given array.
function Twelve(arr, obj) {
  arr.push(obj)
  return arr
}

console.log(Twelve(favTunes, 'Oceansize'))
console.log(Twelve(favTunes, 'Clicquot Shower'))

// 13. Using the function, the four objects, and the array that you have made in the previous steps, invoke the function four times to put those four objects into the array.
// 14. Make sure that the array contains four hashes (maybe log to the screen).

const garage = [];

console.log(Twelve(garage, dreamCar))
console.log(Twelve(garage, shitBox))

// 15. Access two elements of the array that you have created (via an index)

console.log(garage[0]);

// 16. For one of these, now access one of the values of the object at that is located at that index.

console.log(garage[0]['color']);

// =====================================
// 17. Write a function that takes two arguments - one an object, and the other an array. Inside the function log out a value from the object, and an element from the array.

function Splitter(obj, arr) {
  console.log(Object.keys(obj));
  console.log(arr[0]);
}

Splitter(dreamCar, favTunes)
console.log('--------')

// 18. Define four objects, one with one key, one with two keys, one with three keys, and one with four. Make the first key consistent across these objects.

const aria = {
  name: 'Aria',
  breed: 'Rough Collie',
  age: 4,
  color: 'Sable Merle',
}

const buddy = {
  name: 'Buddy',
  breed: 'Jack Russell / Corgi',
  age: 12,
}

const mia = {
  name: 'Mia',
  breed: 'Golden Retriever',
}

const ivy = {
  name: 'Ivy',
}

// 19. Define two different arrays, with two different datatypes.

let arr2 = [15,30,'Happy'];
let arr1 = ['Carbonara', 'Orange', true]

// 20. Call the function four times, once with each object, and use the arrays you made.

Splitter(ivy, arr1)
console.log('--------')

Splitter(aria, arr2)
console.log('--------')

// ==================================
// 21. Write a function that takes five arguments: three strings, and two numbers.

function mixup(string1, string2, string3, num1, num2) {
  console.log(string1, string2, string3, num1, num2)
}
// 22. Call that function three times.

mixup('Testing', 'Hola', 'Fabulous', 52, 11)