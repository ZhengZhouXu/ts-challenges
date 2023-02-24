type Flipped = FlipArguments<
  (arg0: string, arg1: number, arg2: boolean) => void
>;
// (arg0: boolean, arg1: number, arg2: string) => void

type Reverse<T extends unknown[]> = T extends [...infer Rest, infer Last]
  ? [Last, ...Reverse<Rest>]
  : [];

type FlipArguments<T extends Function> = T extends (
  ...args: infer Args
) => infer ReturnType
  ? (...args: Reverse<Args>) => ReturnType
  : T;
