// function curry(fn, ...rest) {
//   const length = fn.length

//   return function () {
//       const args = [...rest, ...arguments]
//       console.log([...rest], [...arguments])
//       if (args.length < length) {
//           return curry.call(this, fn, ...args)
//       } else {
//           return fn.apply(this, args)
//       }
//   }
// }

// const fn = (a, b, c) => {
//   return a + b + c
// }

function add(...args) {
  //求和
  return args.reduce((a, b) => a + b);
}

function currying(fn) {
  let args = [];
  return function temp(...newArgs) {
    if (newArgs.length) {
      args = [...args, ...newArgs];
      return temp;
    } else {
      let val = fn.apply(this, args);
      args = []; //保证再次调用时清空
      return val;
    }
  };
}
// let addCurry = currying(add)
// console.log(addCurry(1)(2)(3)(4, 5)())  //15
// console.log(addCurry(1)(2)(3, 4, 5)())  //15
// console.log(addCurry(1)(2, 3, 4, 5)())  //15

function curry1(fn) {
  let arg = [];
  return function temp(...args) {
    if (args.length) {
      arg = [...arg, ...args];
      return temp;
    } else {
      const result = fn.apply(this, arg);
      arg = [];
      return result;
    }
  };
}

function sum(a, b) {
  return a + b;
}

var fn = currying(add);

// fn("a", "b", "c") // ["a", "b", "c"]
// fn("a", "b")("c") // ["a", "b", "c"]
// fn("a")("b")("c") // ["a", "b", "c"]
// fn("a")("b", "c") // ["a", "b", "c"]
console.log(fn(3)(2)(1)(22)());
