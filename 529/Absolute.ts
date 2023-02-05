type Test = -100;
type Result = Absolute<0>; // expected to be "100"

// 先转成string，判断string
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer R}`
  ? R
  : `${T}`;
