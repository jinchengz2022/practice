Array.prototype.push = function () {
  for(let k = 0; k < arguments.length; k++) {
    this[this.length] = arguments[k];
  }

  return this;
}

const arr = [1,2,3];

arr.push(4,5,6);

console.log(arr);