type Unshift<T extends unknown[], P> = [P, ...T];
type Result = Unshift<[1, 2], 0>; // [0, 1, 2,]
