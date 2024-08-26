export type ArrayType<TArray> = TArray extends Array<infer TArrayType> ? TArrayType : never;
export type ReadonlyArrayType<TArray> = TArray extends Readonly<Array<any>> ? TArray[number] : never;