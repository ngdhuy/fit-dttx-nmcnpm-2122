/**
 * Array trong ES8
 */

'use strict'

console.clear()

// Khai bao mang 1 chieu (array)
let a = [1, 2, 3, 4, 5]

console.log("Print array");
for(let i = 0; i < a.length; i++) {
  console.log(a[i])
}
console.log(a)

console.log("Print array with arrayObject method")
a.forEach(item => {
  console.log(item)
})

console.log("Revert array");
a.reverse();
console.log(a);
a.reverse();
console.log(a);

console.log("Insert new item to array");
a.push(99);
console.log(a);

console.log("Remove item in array");
a.splice(2,2);
console.log(a);

console.log("Sort operator");
a.sort();
console.log(a);

console.log("Insert or Remove objects");
a.push(88, 66, [1, 2, 3]);
console.log("a = ", a);
let b = a.pop();
console.log("a = ", a);
console.log("b = ", b);
console.log("Insert each item to array");
a.push(...[11, 22, 33]);
console.log("a = ", a);
b = a.pop();
console.log("a = ", a);
console.log("b = ", b);

console.log("SHIFT and UNSHIFT");
a.unshift(999);
console.log("a = ", a);
b = a.shift();
console.log("a = ", a);
console.log("b = ", b);