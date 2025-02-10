function sleep1(wait, value) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(value);
      console.log(value);
    }, wait);
  });
}

function sleep2(delay, fn) {
  let t = Date.now();
  while (Date.now() - t <= delay) {
    continue;
  }

  fn();
}

sleep1(2000, 1000);
sleep2(4000, () => {
  console.log("222222");
});
