const ary = [[1, 2], [3, 4, [5, 6]]];

const flatAry = (arr) => {
  return arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? flatAry(cur) : cur), [])
}

console.log(flatAry(ary));