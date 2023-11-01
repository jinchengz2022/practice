class Animal {
  a: "a";
}

class Cat extends Animal {
  b: "b";
}

class BuOu extends Cat {
  c: "c";
}

function fn(dog: Cat) {
  dog.b;
}

type CorgiFunc = (input: BuOu) => void;
type AnimalFunc = (input: Animal) => void;

const func1: CorgiFunc = fn;

// 急用strictFunctionTypes后不会报错，双变
// const func2: AnimalFunc = fn;


interface Person {
  name: string;
  age: number;
  }
  
  interface Guang {
  name: string;
  age: number;
  hobbies: string[];
  }
  
  // 这里 Guang 是 Person 的子类型，因为它有 Person 的所有属性，
  // 还有一个额外的 hobbies 属性。Person 是 Guang 的父类型，因为它是 Guang 的一个子集。
  
  // 协变是指子类型可以赋值给父类型的情况，例如：
  
  let person: Person = { name: "Alice", age: 20 };
  let guang: Guang = { name: "Guang", age: 25, hobbies: ["coding", "reading"] };
  
  person = guang; // 协变，没有错误
  
  // 这里 Guang 类型的变量 guang 可以赋值给 Person 类型的变量 person，
  // 因为 guang 包含了 person 需要的所有属性，而且多余的属性不会影响 person 的使用。
  // 这种情况是类型安全的，也是符合直觉的。
  
  // 逆变是指父类型可以赋值给子类型的情况，例如：
  
  let printHobbies: (guang: Guang) => void;
  printHobbies = (guang) => {
  console.log(guang.hobbies);
  };
  
  let printName: (person: Person) => void;
  printName = (person) => {
  console.log(person.name);
  };
  
  printHobbies = printName; // 逆变，没有错误
  
  // 这里 printName 函数的参数 person 是 printHobbies 函数的参数 guang 的父类型，
  // 但是 printName 可以赋值给 printHobbies。这是因为 printName 只用到了 person 的 name 属性，
  // 而 guang 也有这个属性，所以在调用 printHobbies 的时候不会出现问题。这种情况也是类型安全的，但是不太符合直觉。
  
  // 逆变主要出现在函数参数中，因为函数参数是逆变的（而函数返回值是协变的）。
  // 这意味着如果两个函数的参数类型不同，那么参数更宽泛（父类型）的函数可以赋值给参数更具体（子类型）的函数，
  // 反之则不行。例如：
  
  let printAge: (person: Person) => void;
  printAge = (person) => {
  console.log(person.age);
  };
  
  // 错误，不能将类型“(person: Person) => void”分配给类型“(person: Guang) => void”
  printName = printAge; 
  
  // 这里 printAge 函数的参数 person 是 printName 函数的参数 guang 的子类型，
  // 但是 printAge 不能赋值给 printName。这是因为 printAge 用到了 person 的 age 属性，
  // 而 guang 可能没有这个属性（比如 guang 可以是 { name: "Guang", hobbies: ["coding", "reading"] }），
  // 所以在调用 printName 的时候可能会出现问题。这种情况是不安全的，也是符合直觉的。
  
  // 在 TypeScript 2.x 之前，函数参数支持双向协变，也就是父类型和子类型都可以互相赋值。
  // 这样会导致一些潜在的错误，所以后来 TypeScript 加了一个编译选项 strictFunctionTypes，
  // 设置为 true 就只支持函数参数的逆变，设置为 false 则支持双向协变。



