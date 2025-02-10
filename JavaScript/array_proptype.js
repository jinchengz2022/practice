Array.prototype.push = function () {
  for (let k = 0; k < arguments.length; k++) {
    this[this.length] = arguments[k];
  }

  return this;
};

Array.prototype.unshift = function () {
  const originalLength = this.length;
  const newElementsCount = arguments.length;

  for (let i = 0; i < originalLength; i++) {
    this[i + newElementsCount] = this[i];
  }

  for (let k = 0; k < newElementsCount; k++) {
    this[k] = arguments[k];
  }

  return this;
};

Array.prototype.shift = function () {
  const originalLength = this.length;

  for(let i = 1; i < originalLength; i++) {
    this[i - 1] = this[i];
  }

  this.length = this.length - 1;

  return this;
};

Array.prototype.pop = function () {
  this.length = this.length - 1;

  return this;
};

const arr = [1, 2, 7, 99];

arr.shift(4, 5, 6, 10, 20);

console.log(arr);
