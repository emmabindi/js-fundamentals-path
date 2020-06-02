// Problem 1
// Write a function called arrayMultiply that takes two numbers, and a callback function as arguments. Return the callback function with the two numbers (those arguments) multiplied together as its argument.
// Define an array outside of this function. Because JS scope works differently to Ruby you will be able to use that array within the following function without passing it through as an argument. But please note that it will not be functional programming as such - but in this case if you use map a new array will be created (rather than the original being mutated).
// Define a variable and in it store the result of arrayMultiply when called with 2, 2, and also an anonymous callback function that takes the result as an argument, and then multiplies each element in the array by that result. When you console.log this variable to screen it should produce [ 4, 8, 12 ].

const arr = [1,2,3]

function arrayMultiply(num1, num2, cb) {
  // alternative:
  // return cb(num1 * num2)
  const sum = num1 * num2 
  return cb(sum)
}

// nonanonymous:
function arrayResult(sum) {
  const multipliedArray = arr.map(function(value) {
    return sum * value
  })
  return multipliedArray
} 
const result = arrayMultiply(2, 2, arrayResult); 

console.log("Q1.: ArrayMultiply")
console.log(result)

// this is anonymous callback:
// const result = arrayMultiply(2, 2, function(sum){
//   console.log(sum)
// });
// console.log(result)


// failed attempt:
// const arrayMultiply = (num1, num2, function(callback)) => {
//   console.log(callback())
// }

// arrayMultiply(() => {
//   return num1 * num2
// })

// function callback() {
//   num1 * num2
// }

// arrayMultiply(() => {
//   return num1 * num2;
// })




// Problem 2
// Write a function called arrayMultiplyAgain that takes a number and an array as arguments, and returns each element in the array multiplied by the number. 
// Now write a second function called moreArrayMultiply that takes three arguments: a number, an array, and a function: (eg. num, arr, funct). Have this function return the result of number and array when called as arguments to arrayMultiplyAgain which you passed in as an argument.
// Define a variable and in it store the result of the second function when called with 2, [1, 2, 3], and the first function you created. When you console.log this variable to screen it should produce [ 2, 4, 6 ].


const arr5 = [1,2,3,4,5];
let newArray = [];

arr5.forEach(element => {
  newArray.push(element * 10)
  return newArray
});

console.log("Q2.: ArrayMultiply")
console.log(newArray);

// const arr5 = [1,2,3,4,5];
// let num5 = 10;
// let newArray = [];

// function arrayMultiplyAgain(num5, arr5) {
//   let newArray = arr5.forEach(element => {
//      return element * num5;
//   });
//   return newArray
// }

// arrayMultiplyAgain(num5, arr5);
// console.log(newArray)





// Problem 3
// Implement your own version of .forEach
// Define a function that takes a callback and provides the same functionality as the .forEach function inbuilt into es6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function.

console.log("Q3: My forEach ")
const arr3 = [12,15,18,20]

Array.prototype.myForEach = function(cb) {
  const length = this.length;
  let index = 0;
  while (index < length) {
    console.log(this[index]) 
    index += 1
  }
}

arr3.myForEach((item, index) => {
  console.log(`The item is: ${item}`)
  console.log(`The index is: ${index}`)
})

// Problem 4
// Implement your own version of .map
// Define a function that takes a callback and provides the same functionality as the .map function inbuilt into es6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function.

const mapArrayOld = [5,10,15,20];
const anotherArray = [52,30]

Array.prototype.myMap = function(myCallback) {
  const length = this.length;
  let count = 0
  let mapArrayNew = [];
  while (count < length) {
    mapArrayNew.push(this[count]);
    count += 1
  }
  console.log(mapArrayNew)
}

mapArrayOld.myMap();
anotherArray.myMap();

/* My Pseudo:
Map iterates through an array, doing something then outputs NEW array 
- Use a while loop with a counter 
- create an array variable to catch the output 
*/


// Problem 5
// Implement your own version of .filter
// Define a function that takes a callback and provides the same functionality as the .filter function inbuilt into es6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function.

// Problem 6
// Implement your own version of .reduce
// Define a function that takes a callback and provides the same functionality as the .reduce function inbuilt into es6. You can do this as a function that extends the array prototype (which takes a callback function as an argument), or more simply as a function that takes an array as an argument, as well as a callback function.

// Problem 7 
// Define an object that has two keys, one called 'buy' and the other called 'sell'. These will have the value of an anonymous function that takes no arguments, and that simply returns a string. The function associated with 'buy' will return "I want to buy!!", and the other returns "I want to get out!!"
// Define a function called originalFunction that takes two arguments, a number and an object, which you could call 'functionObject'. If the number is divisible by 2 then the function returns the functionObject's 'buy' function, and otherwise returns the 'sell' function.
// Now call this function with a number and the object that you created as arguments, and store the result in a constant. Now work out how to get the string to display to the screen. 

functionObject = {
  buy: function() { 
    return 'I want to buy!'
  },
  sell: function() {
    return 'I want to get out!!'
  }
}
function originalFunction(num, functionObject) {
  if (num % 2 === 0) {
    console.log(functionObject.buy());
  } else {
    console.log(functionObject.sell());
  }
}

// console.log(functionObject.buy());
(originalFunction(2, functionObject));
(originalFunction(3, functionObject));

// Next I want to get into the synchronous and asynchronous aspects of JS. Actually, most of JS works synchronously - that is, it runs each line of code in order, and waits while each line does its work. There are some things in JS that act asynchronously. These include API calls, setTimeout, and any function that handles events. But maybe it's better to see these things in action first. 

// Problem 8 (sychronicity). 
// This will show the way JS functions when acting synchronously.
// Copy the following code into a file, and run it.
// Loops in JS are synchronous, so the functioning of the program stops while the loop is running (Clayton's beast may not notice this, whereas Nate's computer will give him time to grab a coffee). The code in the callback is run after the outer function's code is completed. 
// Now write this code after your looper function is called 
// console.log("After looper")
// console.log("..now heading off to other parts of the program!")
// console.log("==================")
// Take note of the timing and order that things are logged.
/*
console.log("Problem 8")
console.time('problem-8')
const looper = (cb) => {
    console.time('looper')
    for(i=0; i<1000000000; i++){
    x = Math.random()
    }
    console.log("In looper")
    console.log("After loop!")
    console.timeEnd('looper')
    console.log("..now passing through to the cb..")
    return cb()
}
looper(() => {
    console.timeEnd('problem-8')
    return console.log("Finished 8 in the callback")
})
console.log("After looper")
console.log("..now heading off to other parts of the program!")
console.log("==================")
*/
// Problem 9 (asychronicity)
// Copy and past the code below into a file, and run it.
// Take note of the order that things are logged to the terminal. 
// To see this clearly, run both Problem 8 and 9 in the same file and watch as they log to the terminal. 
// Have a play with the code and see if you can make sense of what is going on. Tinker.

console.log("Problem 9")
console.time('problem-9')
const timeouter = (cb) => {
    console.time('timeouter')
    setTimeout(function() {
        console.log('After setTimeout!')
        console.log("..now passing through to the cb..")
        return cb()
    }, 6000)
    console.log('In timeouter')
    console.timeEnd('timeouter')
}
timeouter(() => {
    console.timeEnd('problem-9')
    return console.log("Finished 9 in the callback!")
})
console.log("After timeouter")
console.log("..now heading off to other parts of the program!")
console.log("==================")
