// function sum(a) {
//   return function (b) {
//     if (b) {
//       return sum(a + b);
//     }
//     return a;
//   };
// }

const sum = (a) => (a ? (b) => (b ? sum(a + b) : a) : "sum not possible");

console.log(sum(4)(2)());
