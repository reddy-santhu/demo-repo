function sum(a, b, fn) {
  let sumvalue = a + b;
  fn(sumvalue);
}
function display(data) {
  console.log("hi" + data);
}

function display_passive(data) {
  console.log(data + "hi");
}

let value = sum(1, 2, display);
let value2 = sum(2, 3, display_passive);
