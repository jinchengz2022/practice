function throttle(fn, delay = 800) {
  let flag = false;

  return function () {
    if(!flag) {
      fn.apply(this,arguments);
      flag = true;
      setTimeout(() => {
        flag = false;
      }, timer);
    }
  }
}

function t1(fn, delay = 800) {
  let timer = null;

  return function() {
    if(!timer) {
      fn.apply(this, arguments)
      timer = setTimeout(() => {
        clearTimeout(timer)
      }, delay);
    }
  }
}


function add(a, b) {
  return a - b; 
}
const result = add(3, 2); 
// 预期结果为 5，但实际结果为 1
console.log(result); 