function compose(middleware) {
  if(!Array.isArray(middleware)) {
    throw new TypeError('')
  }

  for(let k of middleware) {
    if(typeof k !== 'function') {
      throw new TypeError('')
    }
  }

  return function(context, next) {
    let index = -1;
    return dispatch(0);

    function dispatch(i) {
      if(i <= index) {
        return Promise.reject(new Error(''));
      }

      index = i;
      let fn = middleware[i];
      if(i === middleware.length) {
        fn = next;
      }

      if(!fn) {
        return Promise.resolve();
      }

      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch(e) {
        return Promise.reject(err);
      }
    }
  }
}