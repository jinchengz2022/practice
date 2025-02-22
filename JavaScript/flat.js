const ary = [
  [1, 2],
  [3, 4, [5, [6]]],
];

const flatAry = (arr) => {
  return arr.reduce(
    (pre, cur) => pre.concat(Array.isArray(cur) ? flatAry(cur) : cur),
    []
  );
};

console.log(flatAry(ary));

function a(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    let hasRepeat = false;
    for (let j = 0; j < result.length; j++) {
      if (result[j] === arr[i]) {
        hasRepeat = true;
        break;
      }
    }

    if (!hasRepeat) {
      result[result.length] = arr[i];
    }
  }

  return result;
}

function b(arr) {
  let maxNum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (maxNum < arr[i]) {
      maxNum = arr[i];
    }
  }

  return maxNum;
}

function c(arr) {
  let maxCountNum = arr[0];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let c = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[j]) {
        c++;
      }
    }

    if (c > count) {
      maxCountNum = arr[i];
      count = Math.max(c, count);
    }
  }

  return maxCountNum;
}

function d(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const subAry = d(arr[i]);
      for (let k = 0; k < subAry.length; k++) {
        result[result.length] = subAry[k];
      }
    } else {
      result[result.length] = arr[i];
    }
  }

  return result;
  // return arr.reduce((a, b) => a.concat(Array.isArray(b) ? d(b) : b), [])
}

function q(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isSorted = true;
    for (let k = 0; k < arr.length - i - 1; k++) {
      let logNum = 0;
      if (arr[k] > arr[k + 1]) {
        logNum = arr[k];
        arr[k] = arr[k + 1];
        arr[k + 1] = temp;
        isSorted = false;
      }
    }

    if(isSorted) {
      break
    }
  }

  return arr;
}
