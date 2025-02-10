function memorize(fn) {
  const map = new Map();

  return function () {
    const key = JSON.stringify(arguments);
    const result = map.get(key);

    if (result) {
      return result;
    }

    const executeFN = fn.apply(this, arguments);
    map.set(key, executeFN);

    return executeFN;
  };
}

const test = memorize((n) => {
  return n + 5;
});

console.log(test(5));
console.log(test(5));
console.log(test(10));
console.log(test(10));
