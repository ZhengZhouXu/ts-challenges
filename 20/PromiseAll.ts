const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

// expected to be `Promise<[number, 42, string]>`
const p = PromiseAll([promise1, promise2, promise3] as const);

// Awaited 取出promise的类型
declare function PromiseAll<T extends readonly unknown[] | []>(
  promises: T
): Promise<{ readonly [P in keyof T]: Awaited<T[P]> }>;
