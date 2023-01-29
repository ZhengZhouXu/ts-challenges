declare const config: Chainable;

const result = config
  .option('foo', 123)
  .option('name', 'type-challenges')
  .option('bar', { value: 'Hello World' })
  .get();

// 期望 result 的类型是：
interface Result {
  foo: number;
  name: string;
  bar: {
    value: string;
  };
}

// type Chainable<T = {}> = {
//   option: <K extends string, V>(
//     k: K,
//     v: V
//   ) => Chainable<
//     { [key in keyof T as key extends K ? never : key]: T[key] } & {
//       [key in K]: V;
//     }
//   >;
//   get: () => T;
// };

type Chainable<T extends Record<string, unknown> = {}> = {
  option<K extends string, V>(k: K, v: V): Chainable<Omit<T, K> & Record<K, V>>;
  get(): T;
};
