// extends 会执行类似因式分解
type Result = MyExclude<'a' | 'b' | 'c', 'a'>; // 'b' | 'c'

type MyExclude<T, U> = T extends U ? never : T;

// 'a' extends 'a' ? never : 'a' | 'b' extends 'a' ? never : 'b' | 'c' extends 'a' ? never : 'c'
