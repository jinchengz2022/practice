function red(money, count) {
  const reuslt = [];

  let yuE = money;

  for (let k = 0; k < count; k++) {
    if (k !== count - 1) {
      const randomMoney = (Math.random() * yuE).toFixed(2);
      yuE = (yuE - randomMoney).toFixed(2);

      reuslt.push(randomMoney);
    } else {
      reuslt.push(yuE);
    }
  }

  return reuslt;
}

console.log(red(100, 3));
