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

function compose1(...fns) {
  {
    if (fns.length === 0) {
      return (args) => args;
    }

    if (fns.length === 1) {
      return fns[0];
    }
  }

  return fns.reduce(
    (a, b) =>
      (...args) =>
        a(b(args))
  );
}
