type Push<T extends unknown[], P> = [...T, P];

type Result = Push<[1, 2], "3">; // [1, 2, '3']
