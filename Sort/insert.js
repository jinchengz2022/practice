function insert_sort(arr) {
  for(let k = 1; k < arr.length; k++) {
    const sential = arr[k];

    for(let j = k - 1; j >= 0 && arr[j] > sential; j--) {
      arr[j + 1] = arr[j];
    }

    arr[k + 1] = sential;
  }

  return arr;
}

console.log(insert_sort([2,4,1,5,6,2,0]));