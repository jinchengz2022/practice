function _apply(context, args) {
  if (typeof this !== "function") {
    throw TypeError("must is Function");
  }

  context = typeof context === "undefined" ? global : window;

  context.fn = this;

  const result = Array.isArray(args) ? context.fn(...args) :context.fn();

  delete context.fn;

  return result;
}

