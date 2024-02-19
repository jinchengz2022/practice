function sleep(delay, content) {
  return new Promise((res) => {
    // console.log(content, 'start');

    setTimeout(() => {
      // console.log(content, "end");
      res({ delay, content });
    }, delay * 1000);
  });
}

async function asyncPool({ items, limit }) {
  const promises = [];
  const pool = new Set();

  for (const k of items) {
    const promise = k();

    promises.push(promise);
    pool.add(promise);

    const clean = () => pool.delete(promise);

    // 无状态返回，不会执行then方法，当返回resolve或reject时执行then
    promise.then(clean, clean);

    if (pool.size >= limit) {
      await Promise.race(pool);
    }
  }

  return Promise.all(promises);
}

const testPool = async ({items, limit}) => {
  const pool = new Set();
  const promises = [];

  for(let k of items) {
    const promise = k();

    pool.add(promise);
    promises.push(promise)

    const clean = () => pool.delete(promise)

    promise.then(clean, clean)

    if(pool.size >= limit) {
      await Promise.race(pool)
    }
  }

  return Promise.all(promises)
}

const pool = {
  items: [
    () => sleep(1, "吃饭"),
    () => sleep(2, "睡觉"),
    () => sleep(3, "游戏"),
    () => sleep(8, "运动"),
    () => sleep(8, "喝水"),
  ],
  limit: 3,
};

asyncPool(pool);

