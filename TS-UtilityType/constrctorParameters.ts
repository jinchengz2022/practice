type MyConstructorParameters<T extends abstract new (...arg: any) => any> = 
T extends abstract new (...args: infer P) => any ? P : never;