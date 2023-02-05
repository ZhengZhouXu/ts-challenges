type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

// 1. 因式分解，
// 2. never 必须 [never] extends [never] 来判断
type Permutation<T, ACC = T> = [T] extends [never]
  ? []
  : ACC extends ACC
  ? [ACC, ...Permutation<Exclude<T, ACC>>]
  : never;

// type Permutation<T, Acc = T> = [T] extends [never]
// ? []
// : Acc extends Acc
// ? [Acc, ...Permutation<Exclude<T, Acc>>]
// : never;
