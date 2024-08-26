export type Transformed<T extends Record<string, any>, U> = {
    [K in keyof T]: U;
};