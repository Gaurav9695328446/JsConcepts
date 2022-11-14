//memory save  :cache
// calculation output save for the first time so that from secomnd time onwards it will retrieve the value form cache
function calc(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = Math.floor((n * (n + 1)) / 2);
  }
  return sum;
}

//cache
function machine(fn) {
  let context = this;
  let cache = {};
  let abc = 23;
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      cache[n] = fn.call(context, n);
      return cache[n];
    }
  };
}

const memo = machine(calc);

console.time();
console.log("first time", memo(800000000));
console.timeEnd();

console.time();
console.log("second time", memo(800000000));
console.timeEnd();
