/**
 * Arrow Function
 */

// Ham truyen thong
function SayHello() {
  console.log("Hello world");
}

SayHello();

// Cai tien ham truyen thong -> Gan ham cho mot doi tuong (Con tro ham)
let SayHi = function() {
  console.log("Hi everybody");  
}

SayHi();

// Dinh nghia ham mui ten (Arrow function)
const SayWelcome = () => {
  console.log("Welcome to Intruduce Software Engineering");
} 

SayWelcome();

console.log("---------------------------------------");

const Sum = (a, b) => a + b;
console.log(Sum(4, 5));

const Double = a => a * 2;
console.log(Double(4));