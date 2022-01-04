/**
 * Chuyển đổi kiểu dữ liệu cho biến
 */

let number = 100; // number có kiểu là integer
console.log("number =", number);

number = "Hello"; // number có kiểu là string
console.log('number =', number);

// Chuyển đổi chuỗi (string) thành số nguyên (integer)
number = parseInt("123.45");
console.log('(int) number =', number);

// Chuyển đổi chuỗi (string) thành số thực (float)
number = parseFloat("123.45");
console.log('(float)number =', number);