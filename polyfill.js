const avengers = [
  {
    name: "Iron man",
    movies: 3,
  },
  {
    name: "Captain America",
    movies: 3,
  },
  {
    name: "Thor",
    movies: 4,
  },
  {
    name: "Black Widow",
    movies: 1,
  },
  {
    name: "Hulk",
    movies: 2,
  },
  {
    name: "Hawkeye",
    movies: 0,
  },
];

// Array.prototype.polyReduce = function (callback, i       ) {
//   let accumulator = initialValue;
//   for (var i = 0; i < this.length; i++) {
//     accumulator = callback(accumulator, this[i], i, this);
//   }
//   return accumulator;
// };

// Array.prototype.myReduce = function (callback, initialValue) {
//   let accumulator = initialValue;
//   for (var i = 0; i < this.length; i++) {
//     accumulator = callback(accumulator, this[i], i, this);
//   }

//   return accumulator;
// };

// let arr = [1, 2, 3, 4, 5, 6];

// console.log(
//   arr.myReduce((acc, ele) => (ele % 2 !== 0 ? acc.concat(ele) : acc), [])
// );

// console.log(arr.myReduce((acc, ele) => acc.concat(ele * 2), []));
