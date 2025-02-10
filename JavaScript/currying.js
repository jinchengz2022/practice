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

var fn = currying(add);

// fn("a", "b", "c") // ["a", "b", "c"]
// fn("a", "b")("c") // ["a", "b", "c"]
// fn("a")("b")("c") // ["a", "b", "c"]
// fn("a")("b", "c") // ["a", "b", "c"]
// console.log(fn(1,2,3,4,5)(5)());

function add1(...args) {
  function innerAdd(...innerArgs) {
    args.push(...innerArgs);
    return innerAdd;
  }

  innerAdd.getValue = function() {
    return args.reduce((acc, curr) => acc + curr, 0);
  };

  return innerAdd;
}

console.log(add1(1).getValue());
console.log(add1(1,3,4)(2).getValue());