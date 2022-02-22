/**
 * Khai báo biến trong JavaScript -> ECMA Script (ES)
 */

console.log('Hello world!!!');

// Khai báo hằng số
const a = 100;
console.log("const a =", a);

// Khai báo biến toàn cục & cục bộ trong Code Block
let b = 10;
var c = 1;

console.log("let b =", b);
console.log("var c =", c);

// Kiểm tra sự khác nhau giữa 3 keyword const, var, let

// a = 99; // Error vì không thể thay đổi giá trị của hằng số a

b = 999;
c = 888;
console.log("let b =", b);
console.log("var c =", c);

flag = true;
if(flag == true)
{
  console.log("=> a =", a);
  console.log("=> b =", b);
  console.log("=> c =", c);

  const d = 777;  // const  -> hằng số ~ cục bộ trong 1 code block
  let   e = 666;  // let    -> biến cục bộ trong 1 code block
  var   f = 555;  // var    -> biên toàn cục trong 1 file

  console.log("=> d =", d);
  console.log("=> e =", e);
  console.log("=> f =", f);
}


// console.log("=> d =", d);
// console.log("=> e =", e);
console.log("=> f =", f); // -> do f được khai báo kiểu var (toàn cục) nên ngoài code block của IF thì f vẫn có thể được truy xuất