type MyInstanceType<T extends abstract new (...args: any) => any> = T extends abstract new (...args: any) => infer P ? P : never;