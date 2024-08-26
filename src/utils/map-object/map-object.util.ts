export const mapObject = <TSource extends Record<string, any>, U>(obj: TSource, mapper: (value: TSource extends Record<string, infer TValue> ? TValue : never, key: string) => U): {
    [TKey in keyof TSource]: U
} => {
    const result: Record<string, U> = {};

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result[key] = mapper(obj[key], key);
        }
    }

    return result as any;
}