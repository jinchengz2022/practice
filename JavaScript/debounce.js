function debounce(fn, delay = 800) {
  let timer = null;

  return function (...args) {
    if(timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  }
}