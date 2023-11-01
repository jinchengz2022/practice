function count_sort(ary) {
  let max = ary[0];
  let min = ary[0];

  for(let k = 1; k < ary.length; k++) {
    if(max < ary[k]) {
      max = ary[k];
    }

    if(min > ary[k]) {
      min = ary[k]
    }
  }

  const countAry = new Array(max - min + 1);

  for(let k = 0; k < ary.length; k++) {
    countAry[ary[k] - min]++;
  }

  for(let k = 1; k < countAry.length; k++) {
    countAry[k] += countAry[k - 1];
  }

  const sortAry = new Array(ary.length);

  for(let k = ary.length - 1; k >= 0; k--) {
    sortAry[countAry[ary[k] - min] - 1] = ary[k];
    countAry[ary[k] - min]--;
  }

  return sortAry;
}