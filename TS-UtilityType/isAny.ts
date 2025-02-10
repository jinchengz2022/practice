type MyIsAny<T> = 0 extends 1 & T ? true : false;

type Ta = MyIsAny<any>;

// type an<T> = 0 extends 1 & T ? true : false;
