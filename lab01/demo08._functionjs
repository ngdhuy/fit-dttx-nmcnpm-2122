/**
 * Định nghĩa hàm (function) trong ES
 */

// Định nghĩa hàm Cộng --> Truyền tham trị (Pass by value)/truyền giá trị
function Cong(a, b) {
  let c = a + b;
  return c;
}

let a = 1;
let b = 2;
let c = Cong(a, b);
console.log(c);

let d = Cong('8', 9);
console.log(d);

// Định nghĩa hàm tăng gấp đôi --> Truyền tham chiếu (Pass by reference) --> Object
function NhanDoi(x) {
  console.log("--> ", x);
  x = 2 * x;
  console.log("--> ", x);
}

let e = 10;
console.log("e =", e);
NhanDoi(e);
console.log("e =", e);

function NhanDoi_2(x) {
  console.log("--> ", x);
  x.value = 2 * x.value;
  console.log("--> ", x.value);
}
let f = {value: 10};    // Định nghĩa kiểu JSON Object
console.log("f =", f);
NhanDoi_2(f);
console.log("f =", f);