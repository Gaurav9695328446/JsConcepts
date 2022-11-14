// array.flatten
Array.prototype.flat = function (depth) {
  if (depth === undefined) {
    depth = 1;
  }
  var flatten = function (arr, depth) {
    // If depth is 0, return the array as-is
    if (depth < 1) {
      return [...arr];
    }

    // Otherwise, concatenate into the parent array
    return arr.reduce(function (acc, val) {
      return acc.concat(Array.isArray(val) ? flatten(val, depth - 1) : val);
    }, []);
  };

  return flatten(this, depth);
};

let arr = [2, 4, [[[4, 5, 6]]], [4, 7]];
console.log(arr.flat(1));

// const promise1 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 500, "one")
// );

// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 100, "two")
// );

// // const promise2 = new Promise(function (resolve, reject) {
// //   setTimeout(resolve, 100, "two");
// // });

// Promise.myRace = function (promises) {
//   return new Promise((resolve, reject) =>
//     promises.forEach((promise) =>
//       Promise.resolve(promise).then(resolve, reject)
//     )
//   );
// };

// Promise.all = function (promises) {
//   let output = new Array(promises.length);
//   let counter = 0;
//   return new Promise((resolve, reject) =>
//     promises.forEach((promise, index) => {
//       Promise.resolve(promise)
//         .then((value) => {
//           output[index] = value;
//           counter = counter + 1;
//           if (counter === promises.length) {
//             // all promises resolved, resolve outer promise
//             resolve(output);
//           }
//         })
//         .catch(reject); // reject outer promise immediately, as any promise rejects
//     })
//   );
// };

// Promise.all([promise1, promise2])
//   .then((resp) => console.log(resp))
//   .catch((err) => console.log(err));

//bind polyfill

let name = {
  fname: "Gaurav",
  lname: "Arya",
};

function printName(greet, msg) {
  console.log(greet + ", " + this.fname + " " + this.lname + ", " + msg);
}

Function.prototype.myBind = function (...args) {
  let context = this;
  let params = args.slice(1);
  return function (...args2) {
    context.apply(args[0], [...params, ...args2]);
  };
};

let printName2 = printName.myBind(name, "hello");
printName2("How are you");
