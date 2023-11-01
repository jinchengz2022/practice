function _bind(context, ...args) {
  if(typeof this !== 'function') {
    throw TypeError('must is function')
  }

  context.fn = this;

  const self = this;

  return function (...innerArgs) {
    // if(this instanceof _fn) {
    //   return new self(...args, ...innerArgs)
    // }

    return self.apply(context, args.concat(innerArgs))
  }
}