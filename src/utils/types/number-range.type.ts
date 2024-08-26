type Increment<N extends number, Arr extends unknown[] = []> = Arr['length'] extends N ? [...Arr, unknown]['length'] : Increment<N, [...Arr, unknown]>;

export type NumberRange<Start extends number, End extends number, Result extends number[] = []> = Start extends End
    ? [...Result, Start][number]
    : NumberRange<Increment<Start>, End, [...Result, Start]>;