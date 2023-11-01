function deepClone(obj) {
  if(obj === null) {
    return obj;
  }

  if(obj instanceof Date) {
    return new Date(obj);
  }

  if(obj instanceof RegExp) {
    return new RegExp(obj);
  }

  if(typeof obj !== 'object') {
    return obj;
  }

  const result = Array.isArray(obj) ? [] : {};

  for(let k in obj) {
    if(obj.hasOwnProperty(k)) {
      result[k] = typeof obj[k] === 'object' ? deepClone(obj[k]) : obj[k]
    }
  }

  return result;
}