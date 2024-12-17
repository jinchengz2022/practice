// {"a": {"n1": 1, "n2": 3 },  "b": {"n1": 2, "n2": 4},  "c": { "n1": 3,"n2": 5}}）转换成
// {"n1": {"a": 1, "b": 2, "c": 3 }, "n2": { "a": 3, "b": 4, "c": 5}}

const value = { a: { n1: 1, n2: 3 }, b: { n1: 2, n2: 4 }, c: { n1: 3, n2: 5 } };
const target = { n1: { a: 1, b: 2, c: 3 }, n2: { a: 3, b: 4, c: 5 } };

function exchange(obj) {
    if(!Object.prototype.toString.call(obj) === '[object Object]') {
        return {};
    }

    const map = {};

    Object.entries(obj).forEach(([key1, value1]) => {
          console.log({ key1, value1})
        Object.entries(value1).forEach(([key2, value2]) => {
          console.log({key2, key1, value2})
            map[key2][key1] = value2
        })
    })

    return map;
}

console.log(exchange(value));
