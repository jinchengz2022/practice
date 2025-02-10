Promise.prototype.any = function (arr) {
  const result = [];

  return new Promise((res, rej) => {
    function _inner(idx, data) {
      result.push(data);
      if (idx === arr.length - 1) {
        return rej(result);
      }
    }

    for (let k = 0; k < arr.length; k++) {
      arr[i].then(
        (r) => {
          return res(r);
        },
        (err) => {
          _inner(k, err);
        }
      );
    }
  });
};