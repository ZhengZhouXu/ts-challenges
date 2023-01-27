// https://stackoverflow.com/questions/68961864/how-does-the-equals-work-in-typescript
type IsEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B
  ? 1
  : 2
  ? true
  : false;

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>; // expected to be `false`

type Includes<T extends any[], P> = T extends [infer F, ...infer R]
  ? IsEqual<F, P> extends true
    ? true
    : Includes<R, P>
  : false;
