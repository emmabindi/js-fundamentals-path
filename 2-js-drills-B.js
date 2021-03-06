// The next set of drills are a bit more difficult. I know that sometimes it might be hard to work out what is meant by the question, but I ask that you stay with it and do your best to piece it apart - sometimes it is hard to express these questions without some confusion. I am happy to give answers to some of the questions if that will help with the understanding so that you can move forward. Where a question asks for a log to screen, the simplest thing will be to log the name of the function. Most times in these questions it is not what the function does that will be important, but rather how that function sits within the object, or even within the other function.

// 1. Define an object that has two keys. One will have the value of a string, and the other a function (and this function can simply log its own name to screen).

baume = {
  english: 'Tree',
  fabFunc: function() {
    return ('Hi!');
  }
}
console.log(baume.fabFunc);

// 2. Log the string to screen.
console.log(baume.fabFunc());

// 3. Log the entire function to screen.
console.log(baume);
// 4. Invoke the function within the object. 
baume.fabFunc;
// ============================================

// 5. Define an object that has three keys, and each key has the value of an anonymous function. In each function log something to screen (different in each function).
// 6. Call each function (through the object).

greeting = {
  hello: () => {
    console.log("Guten Morgen")
  },
  thankyou: () => {
    console.log("Danke")
  },
  please: () => {
    console.log("Bitte")
  }
}

greeting.hello();
greeting.thankyou();
greeting.please();

// ============================================
// 7. Make a function that returns an object that has two keys, one key with a string value, and the other that has an anonymous function as its value. 
// 8. Log to screen the result of invoking this function.

function Wine(type, varietal, price) {
  this.type = type;
  this.varietal = varietal;
  this.price = function() {
    return '$40';
  }
};

let pustaLibre = new Wine('red', 'blend');
pustaLibre.price();

console.log(pustaLibre);

// 9. Work out how to log to screen the value of the returned object’s string.
console.log(pustaLibre.price());  

// 10. Invoke the returned object’s function (via the first function - you will need to return the object, and then call the function within the returned object). 

let vino = pustaLibre;
console.log(vino);
console.log("-------")
console.log(vino.price());

//==========================================
// 11. Write a function that takes a number and a function as an argument. Inside this function perform three simple calculations with the given number (the first argument), and then pass the final result to the function that is passed as the second argument.

function bestFunc(num, callback) {
  const byTen = (num * 10);
  const byTwenty = byTen * 20;
  const byFifty = byTwenty * 50;
  return byFifty 
  callback()
}

function callback() {
  return words = ("This is some output");
}

callback();
console.log(words);
console.log(bestFunc(2, callback()));

// 12. Call this function three times with different numbers, and a different anonymous callback function each time (perhaps each time the callback doing a different simple calculation). 

function callback2() {
  return sentence = ("A big story");
}

console.log(bestFunc(3, callback2));

// HARRISON HOW DO I DO THIS WITH AN ANONYMOUS CALLBACK FUNCTION 




// 13. Now write two functions that take a number as an argument, and do some very simple calculation.

const subtractor = (x, y) => {
  return x - y 
}

console.log(subtractor(10, 5));

// const multiplier = (x, y) => {
//   return x * y;
// }

multiplier = (x, y) => {
  return x * y;
}

console.log(multiplier(2,9));
console.log("----------")

// 14. Invoke the function from 11 twice, each time with a different number argument, and using each of the two functions that you just defined in 13 (one in each invocation). 

//My notes, Nothing was happening initially, this is because the multiplier callback function was created with a variable of multiplier.. fixed it to be a function only, now it works:
console.log(bestFunc((multiplier(1,5)), callback()));

// ============================================
// 15. Define three very basic functions that take no arguments and that simply console out the name of the function. 

function func1() {
  console.log(`Name is: ${func1}`);
}

function func2() {
  console.log(`Name is: ${func2}`);
}

func3 = () => {
  console.log(`Name is: ${func3}`);
}

func1();
func2();
func3();

// 16. Place each of these functions into an array (do not call the functions).

let array1 = [];

array1.push(func1); 
array1.push(func2);
array1.push(func3);

console.log(array1);

// 17. Loop through this array and invoke each of the functions in turn.

array1.forEach(value =>
  console.log(value));

// with index:

array1.forEach(function(value, index) { 
  console.log(`${index} : ${value}`);
});
// ============================================
// 18. Define a function (funcReturnsFunc) that returns an anonymous function. If you like you can have funcReturnsFunc log out something before it returns the function. The returned function can just log out a simple message to inform you it ran. 
// 19. Invoke funcReturnsFunc, and store the result in a const.
// 20. Using that const, run the returned function.


const funcReturnsFunc = (cb) => {
  console.log(cb())
}

funcReturnsFunc(() => {
  return "Inside the callback"
});



// function funcReturnsFunc() {
//   console.log("Here");
//   return anonymous = function() {
//     console.log("I ran successully")
//   };
// }


// funcReturnsFunc(anonymous());

// 21. Now do the same thing in one line: run funcReturnsFunc, and then run the anonymous function that results immediately.

