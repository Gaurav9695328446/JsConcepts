// memoization is a optimization technique in which we cache some time taking calculations  and return that value from that  whenever needed.

const sum = (n) => {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
};

const memoize = (fn) => {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      let total = fn(n);
      cache[n] = total;
      return total;
    }
  };
};

const memo = memoize(sum);

console.time();
console.log(memo(100000000));
console.timeEnd();

console.time();
console.log(memo(100000000));
console.timeEnd();
