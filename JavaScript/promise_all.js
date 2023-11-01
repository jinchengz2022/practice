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
// function my_promiseAll(arr) {
//   const result = [];

//   return new Promise(async (res, rej) => {
//     function inner_fn(idx, date) {
//       result.push(date);
//       if (idx === arr.length - 1) {
//         return res(result);
//       }
//     }
//     for (let k = 0; k < arr.length; k++) {
//       // arr[k]() ---> 请求
//       arr[k]().then(
//         (singleRes) => {
//           inner_fn(k, singleRes);
//         },
//         (err) => {
//           return rej(err);
//         }
//       );
//     }
//   });
// }

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

const all = Promise.all(pools);

all.then((r) => {
  console.log(r);
});

