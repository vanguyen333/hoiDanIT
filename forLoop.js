console.log("Learn For Loop!");

// let arr = ["MU", "ManCity", "Liver", "Chelsea"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

let arr = ["MU", "ManCity", "Liver", "Chelsea"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(`Top`, i + 1, arr[i]);
// }

// var i = 0;
// while (i < 4) {
//   console.log(`Top`, i + 1, arr[i]);
//   i++;
// }

// let i = 0;
// do {
//   console.log(`Top`, i + 1, arr[i]);
// } while (i < 0);

//printing index that has the length of 2, result is MU
let i = 0;
while (i < arr.length) {
  if (arr[i].length === 2) {
    console.log(arr[i]);
  } else if (arr[i].length === 5) {
    console.log(arr[i]);
  } else {
    console.log("do nothing");
  }
  i++;
}
