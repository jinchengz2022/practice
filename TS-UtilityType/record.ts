type MyRecord<T, K> = {
  [P in keyof T]: K;
}