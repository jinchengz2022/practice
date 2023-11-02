function request(ms = 1000) {
  return new Promise(res => {
    setTimeout(() => {
      res('come on!')
    }, ms);
  })
}

function *gen() {
  // 打印 come on
  const res1 = yield request();
  // 不打印
  const res2 = yield request();

  console.log(res1, res2);
  
}

function coSimple(gen) {
  const ctx = this;
  const args = Array.prototype.slice.call(arguments, 1);

  gen = gen.apply(ctx, args);

  const ret = gen.next();
  const p = ret.value;

  p.then(r => {
    const ret = gen.next(r);
    const p = ret.value;

    p.then(r => {
      gen.next(r)
    })
  })
}

coSimple(gen)