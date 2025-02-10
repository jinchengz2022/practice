// 打乱数组
function shuffle1(ary) {
  let i = ary.length;

  while(i) {
    let j = Math.floor(Math.random() * i--);
    [ary[j], ary[i]] = [ary[i], ary[j]];
  }

  return ary;
}

function shuffle2(ary) {
  const res = ary.sort(() => Math.random() - 0.5);

  return res
}

console.log(shuffle2([1,2,3,4,5,6,7]));