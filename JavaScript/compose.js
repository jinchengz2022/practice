const compose = (...fns) =>
  fns.reduce(
    (f, g) =>
      (...args) =>
        f(g(...args))
  );

const sum1 = (a) => a + 10;
const sum2 = (a) => a * 2;

const result = compose(sum1, sum2)(2);

console.log(result);