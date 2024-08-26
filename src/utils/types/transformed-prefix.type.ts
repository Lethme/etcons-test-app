export type TransformedPrefix<T extends Record<any, any>, P extends string> = {
    [K in keyof T as `${Lowercase<string & P>}${Capitalize<string & K>}`]: T[K];
}