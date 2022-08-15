// 递归，解决类型嵌套
type MyAwaited<T> = T extends Promise<infer P> ? P extends Promise<any> ? MyAwaited<P> : P : T;

type ExampleType = Promise<Promise<string>>

type Result = MyAwaited<ExampleType> // string