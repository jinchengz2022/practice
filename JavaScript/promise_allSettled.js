Promise.prototype.allSettled = function (arr) {
  const result = [];

  return new Promise((res, rej) => {
    function _inner(idx, data) {
      result.push(data);
      if (idx === arr.length - 1) {
        return res(result);
      }
    }

    for (let k = 0; k < arr.length; k++) {
      arr[i].then(
        (r) => {
          _inner(k, r);
        },
        (err) => {
          _inner(err, r);
        }
      );
    }
  });
};