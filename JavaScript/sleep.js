function sleep(wait, value) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(value);
    }, wait);
  })
}

function sleep(delay) {
  let t = Date.now();
  while (Date.now() - t <= delay) {
    continue;
  }
}