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
gen();


function coSimple(g) {
  g = g();

  const r = g.next();
  const p = r.value;
  p.then(res => {
    g.next(res)
  })
}

coSimple(gen)