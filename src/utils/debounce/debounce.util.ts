export function debounce<
    TFunction extends (...args: Array<any>) => any
>(
    this: ThisParameterType<TFunction>,
    func: TFunction,
    delay: number = 0,
    callback?: (arg: ReturnType<TFunction>) => void
): (...args: Parameters<TFunction>) => void {
    // Store the ID of the timeout used for debouncing
    let timeoutId: number | undefined;

    return function (this: ThisParameterType<TFunction>, ...args: Parameters<TFunction>) {
        // Clear any existing timeout to reset the debounce timer
        clearTimeout(timeoutId);

        // Set a new timeout to execute the function after the specified delay
        timeoutId = setTimeout(async () => {
            // Execute the original function with provided arguments
            const response = await func.apply(this, args);
            // Call the callback function with the response if provided
            callback && callback.call(this, response);
        }, delay) as any;
    }
}