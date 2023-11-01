// 打乱数组
function shuffle(ary) {
  let i = ary.length;

  while(i) {
    let j = Math.floor(Math.random() * i--);
    [ary[j], ary[i]] = [ary[i], ary[j]];
  }

  return ary;
}

console.log(shuffle([1,2,3,4,5,6,7]));