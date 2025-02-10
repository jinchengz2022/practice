const pipe = (value) => {
  const stack = [];
  const proxy = new Proxy(
    {},
    {
      get(target, props) {
        if (props === "execute") {
          return stack.reduce((pre, cur) => cur(pre), value);
        }

        stack.push(window[props]);
        return proxy;
      },
    }
  );

  return proxy;
};

const double = (n) => n + 10;
const pow = (n) => n * 10;
const many = (n1, n2, n3) => n1 + n2 + n3;

// reduce
const pipeAry = [double, pow];
const _pipe1 = (num) => pipeAry.reduce((pre, cur) => cur(pre), num);
const _pipe2 = (...fns) => {
  return function (param) {
    return fns.reduce((num, fn) => fn(num), param);
  };
};

const test = _pipe2(double, pow);
console.log(test(2));
