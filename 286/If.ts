type Result2 = Concat2<[1], [2]>; // expected to be [1, 2]

type Concat2<T extends any[], P extends any[]> = [...T, ...P];
