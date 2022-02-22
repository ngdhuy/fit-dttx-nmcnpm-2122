/**
 * Advance array in ES
 */

'use strict'

console.clear()

let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log("a = ", a);

//? Get for each item
a.forEach(item => console.log(item))
console.log('------ FOR EACH ------')
a.forEach((item, index) => {
  console.log("item ", index, " = ", item * 2)
})

//? Get all item with MAP
console.log('------ MAP ------')
let b = a.map(item => {
  return item * 2
})

console.log("b = ", b)

//? Filter item with condition
console.log('------ FILTER ------')
b = a.filter(item => item % 2 === 0)
console.log("b = ", b)

//? Filter with REDUCE
console.log('------ REDUCE ------')
console.log('a = ', a)
// let sum = 0
// a.forEach(item => sum += item)
let sum = a.reduce((result, item) => {
  return result + item
}, 0)

console.log("Sum = ", sum)