//debouncing concepts
let obj = {
  name: "Gaurav",
  greet: function () {
    console.log("Good Morning, " + this.name);
  },
};

function increement(ob) {
  obj.greet.apply(ob);
}

const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  increement({ name: "Tony Stark" });
});
// const getData = (val) => {
//   // console.log(val, counter++, "Fetching Suggesation from api");
// };

// //third
// const debounce = function (fn, delay) {
//   let context = this;
//   let timer;
//   return function (...args) {
//     console.log("timer", timer);
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(context, args);
//     }, delay);
//   };
// };

// //second
// const getSuggesation = debounce((e) => getData(e), 5000);

// // first
// const inputElem = document.getElementById("search");
// inputElem.addEventListener("keyup", function (e) {
//   // console.log(e.target.value.length, "string lenmgth");
//   debounce(() => getData(e.target.value), 5000)();
//   getSuggesation(e.target.value);
// });
