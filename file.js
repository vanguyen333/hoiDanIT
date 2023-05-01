console.log("Hello world from Green Pear!".toUpperCase());
// let a = 5;
// let b = 6;
// let c = 6.9;
// let d = "5";
// console.log(a + b); //11
// console.log(a + c); //11.9
// console.log(a === d, a, typeof a, d, typeof d);

// Video 8 Kieu du lieu Object
let obj = {
  name: "Eric",
  address: "Hanoi",
  a: function () {
    console.log("Hellow world inside a function of an object!");
    return "";
  },
};
let b = "name";
obj.name = "Harry";

console.log(`What is your name? My name is: `, obj.name);
console.log(obj.a());
