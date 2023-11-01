function throttle(fn, delay = 800) {
  let timer = null;

  return function (...args) {
    if(!timer) {
      fn(...args);
    }

    timer = setTimeout(() => {
      clearTimeout(timer);
      timer = null;
    }, delay);
  }
}