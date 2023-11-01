import { t, A as AA } from 'inter'

const c: t = 'ju';
const cc: AA['b'] = '';

type A = {
  name: string;
  age: number;
};

type B = {
  name: boolean;
  age: number;
}

type C = A & B;

// type D = C
// const a: C = {
//   name: '1', never
//   age: 2 never
// }
type Args = ['a', number] | ['b', string];

type Func = (...args: ["a", number] | ["b", string]) => void;

const f1: Func = (kind, payload) => {
  if (kind === "a") {
    // 仍然是 string | number
    console.log(payload);
    
  }
  if (kind === "b") {
    // 仍然是 string | number
    console.log(payload);
  }
};

f1('a', 123);
f1('b', '123');

const arr: Array<number> = [1, 2, 3];

arr.reduce((prev, curr, idx, arr) => {
  return prev;
}, 1);

// 第二种 reduce
// 报错：不能将 number 类型的值赋值给 never 类型
const arr1 = arr.reduce((prev, curr, idx, arr) => {
  return [...prev, curr]
}, [] as number []);

class Cat {
  eat<T>(v: T): T {
    return v
  }
}

class Dog {
  eat<T>(v: T): T {
    return v
  }
}

function feedCat(cat: Cat) { }

// 报错！
feedCat(new Dog())



class TagProtector<T extends string> {
  private _tag: T;
}

type Nominal<T, U extends string> = T & TagProtector<U>;

export type CNY = Nominal<number, 'CNY'>;

export type USD = Nominal<number, 'USD'>;

const CNYCount = 100 as CNY;

const USDCount = 100 as USD;

function addCNY(source: CNY, input: CNY) {
  return source + input;
}

addCNY(CNYCount, CNYCount);

// 报错了！
// addCNY(CNYCount, USDCount);

// 类型“V”不满足约束“string | number | symbol”。
type ReverseKeyValue<T extends Record<string, string>> = T extends Record<
  infer K,
  infer V
>
  ? Record<V & string, K>
  : never;
// & string: 确保 推导V的类型为string



