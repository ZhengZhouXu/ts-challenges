type PString1 = '';
type PString2 = '+85%';
type PString3 = '-85%';
type PString4 = '85%';
type PString5 = '85';

type R1 = PercentageParser<PString1>; // expected ['', '', '']
type R2 = PercentageParser<PString2>; // expected ["+", "85", "%"]
type R3 = PercentageParser<PString3>; // expected ["-", "85", "%"]
type R4 = PercentageParser<PString4>; // expected ["", "85", "%"]
type R5 = PercentageParser<PString5>; // expected ["", "85", ""]

// 枚举所有情况
// type PercentageParser<T> = T extends `${infer Prefix}${infer R1}`
//   ? Prefix extends '-' | '+'
//     ? R1 extends `${infer R2}%`
//       ? [Prefix, R2, '%']
//       : [Prefix, R1, '']
//     : T extends `${infer R2}%`
//     ? ['', R2, '%']
//     : ['', T, '']
//   : ['', '', ''];

// 提取加减符号
type ExtractPrefix<T> = T extends `${infer Prefix}${infer Rest}`
  ? Prefix extends '-' | '+'
    ? Prefix
    : ''
  : '';

// 提取数字
type ExtractNumber<T> = T extends `${'+' | '-'}${infer Rest}%`
  ? Rest
  : T extends `${'+' | '-'}${infer Rest}`
  ? Rest
  : T extends `${infer Rest}%`
  ? Rest
  : T;

// 提取百分号
type ExtractSuffix<T> = T extends `${infer Rest}%` ? '%' : '';

type PercentageParser<T> = [
  ExtractPrefix<T>,
  ExtractNumber<T>,
  ExtractSuffix<T>
];
