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

// reduce
const pipeAry = [double, pow];
const _pipe = (num) => pipeAry.reduce((pre, cur) => cur(pre), num);

console.log(_pipe(2));
