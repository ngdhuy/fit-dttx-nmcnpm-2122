/**
 * Câu lệnh điều kiện trong ES
 */

let n = 7; 
if (n % 2 == 0) {
  console.log(n, "là số chẵn");
} else {
  console.log(n, "là số lẻ");
}

let m = 3;
switch(m) {
  case 1:
    console.log("Chủ nhật");
    break;
  case 2: 
    console.log("Thứ 2");
    break;
  case 3: 
    console.log("Thứ 3");
  case 4:
    console.log("Thứ 4");
    break;
  default:
    console.log("Dữ liệu không hợp lệ");
}