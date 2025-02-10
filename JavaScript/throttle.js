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

function debounce(fn, timer) {
  let t = null;

  t = setTimeout(() => {
    
  }, timer);
  return throttle(fn, timer)
}

