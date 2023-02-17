type Zero = MinusOne<1>; // 0
type FiftyFour = MinusOne<55>; // 54

type MinusOne<T extends number> = T;
