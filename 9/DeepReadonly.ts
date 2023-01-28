type X = {
  x: {
    a: 1;
    b: 'hi';
  };
  y: 'hey';
};

type X1 = {
  l: [
    'hi',
    {
      m: ['hey'];
    }
  ];
};

type Expected = {
  readonly x: {
    readonly a: 1;
    readonly b: 'hi';
  };
  readonly y: 'hey';
};

type Todo2 = DeepReadonly<X1>; // should be same as `Expected`

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends Object
    ? T[K] extends Function // 需要处理Function的情况
      ? T[K]
      : DeepReadonly<T[K]>
    : T[K];
};
