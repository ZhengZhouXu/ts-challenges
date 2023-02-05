type flatten = Flatten<[]>; // [1, 2, 3, 4, 5]

// type Flatten<T> = T extends []
//   ? []
//   : T extends [infer U, ...infer R]
//   ? R['length'] extends 0
//     ? [...Flatten<U>]
//     : [...Flatten<U>, ...Flatten<R>]
//   : [T];

type Flatten<T extends unknown[]> = T extends [infer U, ...infer R]
  ? [...(U extends unknown[] ? Flatten<U> : [U]), ...Flatten<R>]
  : [];
