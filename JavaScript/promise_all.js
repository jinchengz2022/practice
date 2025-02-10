const sleep = (data, delay) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (data === "error") {
        return rej("error");
      }
      return res(data);
    }, delay * 1000);
  });
};
const pools = [
  sleep("name", 1),
  sleep("age", 1),
  sleep("sex", 1),
  sleep("inter", 3),
  sleep("error", 3),
];

Promise.prototype.all = function (arr) {
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
          return rej(err);
        }
      );
    }
  });
};

const alltest = (ary) => {
  const result = [];

  return new Promise((res, rej) => {
    function innerFC(index, req) {
      result.push(req);
      if (index === ary.length - 1) {
        return res(result);
      }
    }
    try {
      for (let k = 0; k < ary.length; k++) {
        ary[k]
          .then((value) => {
            innerFC(k, value);
          })
          .catch((e) => {
            rej(e);
          });
      }
    } catch (error) {
      rej(error);
    }
  });
};

const all = Promise.all(pools);
