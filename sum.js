let a = [1, 2, 3, 4];
// a.sum() = 10;

// a.prototype.sum = function () {
//   return this.reduce((pre, cur) => pre + cur, 0);
// };

// 判断A是否是B的父节点
function isContain(domA, domB) {
  if(domA.contain(domB.target)) {
    return true;
  }

  return false;
}

function sleep(delay, content) {
  return new Promise((res) => {
    // console.log(content, 'start');

    setTimeout(() => {
      // console.log(content, "end");
      res({ delay, content });
    }, delay * 1000);
  });
}

const pool = {
  items: [
    () => sleep(1, "吃饭"),
    () => sleep(1, "睡觉"),
    () => sleep(3, "游戏"),
    () => sleep(3, "运动"),
    () => sleep(3, "喝水"),
  ],
  limit: 3,
};
function my_promiseAll(arr) {
  const result = [];

  return new Promise((res, rej) => {
    for(let k of arr) {
      k().then((r) => {
        result.push(r);
      }, (err) => {
        rej(err)
      })
    }
    res(result);
  })
}
my_promiseAll(pool.items)
