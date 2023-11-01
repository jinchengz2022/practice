function _call(context, ...args) {
  if (typeof this !== "function") {
    throw TypeError("must is Function");
  }

  context = typeof context === "undefined" ? global : window;

  context.fn = this;

  const result = context.fn(...args);

  delete context.fn;

  return result;
}

