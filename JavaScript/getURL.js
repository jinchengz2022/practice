const _getURL = () => {
  const search = new URLSearchParams(window.location.search);
  const result = {};

  for(let [key, value] of search.entries()) {
    result[key] = value;
  }

  return result;
}