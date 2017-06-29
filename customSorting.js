var array = [10, 2, 5, 1, 9];

// var sorted = array.sort(function(a, b) {
//   return a - b;
// })

// console.log(sorted);

var sortNumber = function(a, b) {
  return a - b;
}


console.log(array.sort(sortNumber));