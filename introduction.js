// let string = "JavaScript";

// console.log(string.substring(0, 4));

// console.log(2 + 3);

// console.log(typeof null);

// let age = 100; // age in years
// const gravity = 9.81; // earth gravity  in m/s2
// const boilingPoint = 100; // water boiling point, temperature in °C
// const PI = 3.14; // geometrical constant
// console.log(gravity, boilingPoint, PI);

// let nums = [1, 2, 3]
// nums[0] = 10;
// console.log(nums);

// const PI = Math.PI
// console.log(PI)

// console.log(Math.round(PI))

// console.log(Math.sqrt(100));

// let firstName = "rahul"
// let lastName = "puhul"
// console.log(`Iam ${firstName}`)

// let num = "hello"
// console.log(num.replace('hello', 'hey'))

// let num = '10'
// let numINT = parseInt(num)
// console.log(numINT)

// console.log(NaN === NaN);
// console.log(3 === 3)

// const now = new Date();
// console.log(now);

// let num = 3
// if (num > 0) {
//     console.log("today is raining")
// }

// let weather = "cloudy";
// switch (weather) {
//   case "rainy":
//     console.log("You need a rain coat.");
   
//   case "cloudy":
//     console.log("It might be cold, you need a jacket.");
   
//   case "sunny":
//     console.log("Go out freely.");
//     break;
//   default:
//     console.log(" No need for rain coat.");
// }

// const fruits = ["banana", "orange", "mango", "lemon"];
// let firstFruit = fruits[0]; // we are accessing the first item using its index

// console.log(firstFruit);

// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// let numbers = [1, 2, 3, 4, 5]
// for (const num of numbers) {
//   console.log(num*num)
// }

// for (i = 0; i <= 5; i++){
//   if (i == 3) {
//     break
//   }
//   console.log(i)
// }

//  function addTwoNumbers() {
//    let numOne = 2;
//    let numTwo = 3;
//    let total = numOne + numTwo;
//    return total;
//  }

// console.log(addTwoNumbers());
 

// function areaOfCircle(r) {
//   let area = Math.PI * r * r;
//   return area;
// }

// console.log(areaOfCircle(10));

// function greetings(name = "Peter") {
//   let message = `${name}, welcome to 30 Days Of JavaScript!`;
//   return message;
// }

// console.log(greetings());
// console.log(greetings("Asabeneh"));


// const numbers = [1, 2, 3, 4, 5]
// const numberSquare = numbers.map((num) = num * num)
// console.log(numberSquare)


const numbers = [1, 2, 3]
  let [numOne, numTwo, numThree] = numbers

  console.log(numOne, numTwo, numThree)