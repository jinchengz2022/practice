function request(ms = 1000) {
  return new Promise(res => {
    setTimeout(() => {
      res('come on!')
    }, ms);
  })
}

function *gen() {
  const res1 = yield request();
  const res2 = yield request();
  const res3 = yield request();
  const res4 = yield request();

  console.log(res1, res2, res3, res4);
  
}

function coSimple(g) {
  const ctx = this;
  const args = Array.prototype.slice.call(arguments, 1);
  g = g.apply(ctx, args);

  return new Promise((res, rej) => {
    onFulfilled();

    function onFulfilled(res) {
      const ret = g.next(res);
      next(ret);
    }

    function next(ret) {
      const promise = ret.value;

      promise && promise.then(onFulfilled);
    }
  })
}

coSimple(gen)