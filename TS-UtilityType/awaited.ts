type Thenable<T> = (_: (arg: T) => unknown) => unknown;
type MyAwaited<T extends Promise<any> | Thenable<any>> = 
T extends Promise<infer R> ? 
R extends Promise<any> ?
MyAwaited<R> : 
R :
T extends Thenable<infer U> ? 
U : 
never;