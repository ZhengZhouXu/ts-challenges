type Sample1 = AnyOf<[1, '', false, [], {}]>; // expected to be true.
type Sample2 = AnyOf<[0, '', false, [], {}]>; // expected to be false.

// 1. 遍历数组
// 2. {} 用 Record<string, never> 表示
type Falsy = 0 | '' | false | [] | Record<string, never> | null | undefined;
type AnyOf<T> = T extends [infer U, ...infer R]
  ? U extends Falsy
    ? AnyOf<R>
    : true
  : false;

type Test = {} extends Record<string, never> ? true : false;
