// 多任务串行
function execute(tasks) {
  return tasks.reduce(
    (previousPromise, currentPromise) =>
      previousPromise.then((resultList) => {
        return new Promise((resolve) => {
          currentPromise
            .then((result) => {
              resolve(resultList.concat(result));
            })
            .catch(() => {
              resolve(resultList.concat("error"));
            });
        });
      })
    // []
  );
}

const Task = function (result, isSuccess = true, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        console.log(result, "------>    done");
        resolve(result);
      } else {
        reject(result);
      }
    }, delay * 1000);
  });
};

execute([Task(["A"], true, 1), Task("B", true, 2), Task("C", true, 3), Task("D",  true, 4)]).then((r) => {
  console.log(r);
});

async function cPromise(pool, limit = 3, start = 0) {
  let resultTask = 0;
  let logIdx = start % limit;

  function _run1() {
    const task = pool[logIdx];
    logIdx++;
    task.then(
      (res) => {
        resultTask++;
        if (logIdx < pool.length && logIdx < limit) {
          _run1();
        } else {
          cPromise(pool, limit, logIdx);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  for (let k = start; k < pool.length && k % limit < limit; k++) {
    _run1();
  }
}

// cPromise([
//   Task("A", true, 1),
//   Task("B", true, 1),
//   Task("C", true, 1),
//   Task("D", true, 1),
//   Task("E", true, 1),
//   Task("F", true, 1),
//   Task("G", true, 8),
//   Task("H", true, 8),
//   Task("I", true, 2),
//   Task("J", true, 2),
// Task("K", true, 2),
// Task("L", true, 1),
// ]);
