type MyExclude<T, K> = T extends K ? never : T;

// type ex<T, K> = T extends K ? never : T

// type ext<T, K> = T extends K ? T : never