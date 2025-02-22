
const url = require('node:url')

const myURL = new url.URL('https://user:pass@sub.example.com:8000/jin/c/?a=lucy&b=motonony#hashhash')

console.log('myURL.searchParams', myURL.searchParams);

const _getURL = () => {
  const search = new URLSearchParams(window.location.search);
  const result = {};

  for(let [key, value] of search.entries()) {
    result[key] = value;
  }

  return result;
}

const handleGetURL = (url) => {
  const result = {};
  const str = url.split('?')[1];
  const keyValueAry = str.split('&');

  keyValueAry.forEach((item) => {
    const [key, value] = item.split('=');
    result[key] = value;
  })

  return result;
}

console.log(handleGetURL('https://baidu.com?a=2&b=3&name=jincheng'));