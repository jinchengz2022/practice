function compose (middleware: unknown[]) {
  if(!Array.isArray(middleware)) {
    throw new TypeError('Middleware stack must be an array!');
  }

  for(const fn of middleware) {
    if(typeof fn !== 'function') {
      throw new TypeError('Middleware stack must be an function!');
    }
  }

  return function (context, next) {
    let index = -1;
    return dispatch(0);

    function dispatch(i: number) {
      if(i <= index) {
        return Promise.reject(new Error('next() called multiple times'));
      }

      index = i;

      let fn: any = middleware[i];
      if(i === middleware.length) {
        fn = next;
      }
      if(!fn) {
        return Promise.resolve();
      }

      try{
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)))
      } catch(err) {
        return Promise.reject(err);
      }
    }
  }
}