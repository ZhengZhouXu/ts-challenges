type Concat<T extends unknown[], R extends unknown[]> = [...T, ...R];

type Res = Concat<[1], [2]> // expected to be [1, 2]

type ArrayType<T extends unknown[]> = T extends (infer P)[] ? P : T;

type AT = ArrayType<number[]>;