type MyParameters<T> = T extends (...args: infer R) => any ? [...R] : [];


// type A<T> = T extends (...args: infer P) => any ? [...P] : never