type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>; // [1, 2, 3, 4, [5]]. flattern 2 times
type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1

// 使用数组计数
type FlattenDepth<
  T extends unknown[],
  U extends number = 1,
  Counter extends unknown[] = []
> = Counter['length'] extends U
  ? T
  : T extends [infer First, ...infer Rest]
  ? First extends unknown[]
    ? [
        ...FlattenDepth<First, U, [unknown, ...Counter]>,
        ...FlattenDepth<Rest, U, Counter>
      ]
    : [First, ...FlattenDepth<Rest, U, Counter>]
  : T;
