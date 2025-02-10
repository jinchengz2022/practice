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
          _inner(k, err);
        }
      );
    }
  });
};

const alls = (ary) => {
  const result = [];

  return new Promise((res) => {
    function inner(index, reqRes) {
      result.push(reqRes);
      if (index === ary.length - 1) {
        return res(result);
      }
    }

    for (let i = 0; i < ary.length; i++) {
      ary[k]
        .then((value) => {
          inner(i, value);
        })
        .catch((e) => {
          inner(i, e);
        });
    }
  });
};
