Promise.prototype.race = function(arr) {
  return new Promise((res, rej) => {
    for(let k of arr) {
      Promise.resolve(k).then(res, rej);
    }
  })
}