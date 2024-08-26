export function throttle<
    TFunction extends (...args: Array<any>) => any
>(
    this: ThisParameterType<TFunction>,
    func: TFunction,
    interval: number = 0,
    callback?: (arg: ReturnType<TFunction>) => void
): (...args: Parameters<TFunction>) => void {
    // Flag to track whether the function is currently throttled
    let isThrottled = false;
    // Store the last set of arguments passed to the function
    let lastArgs: Parameters<TFunction> | null = null;
    // Store the timestamp of the last function execution
    let lastFuncProcDate: Date | null = null;

    // Function to execute the original function and handle callback
    const callFunc = async (...args: Parameters<TFunction>) => {
        // Execute the original function with provided arguments
        const response = await func.apply(this, args);
        // Call the callback function with the response if provided
        callback && callback.call(this, response);
    }

    return function (this: ThisParameterType<TFunction>, ...args: Parameters<TFunction>) {
        // If the function is not currently throttled
        if (!isThrottled) {
            // If there's no previous execution or enough time has passed since the last execution
            if (!lastFuncProcDate || Math.abs((new Date()).getTime() - lastFuncProcDate!.getTime()) >= interval) {
                // Call the function with the provided arguments
                callFunc(...args);
                // Update the last function execution timestamp
                lastFuncProcDate = new Date();
            }

            // Set the throttled flag to true
            isThrottled = true;

            // Set a timeout to clear the throttle after the specified interval
            setTimeout(() => {
                // Clear the throttled flag after the interval
                isThrottled = false;

                // If there are stored arguments and enough time has passed since the last execution
                if (lastArgs && Math.abs((new Date()).getTime() - lastFuncProcDate!.getTime()) >= interval) {
                    // Call the function with the stored arguments
                    callFunc(...lastArgs);

                    // Update the last function execution timestamp
                    lastFuncProcDate = new Date();
                    // Clear the stored arguments
                    lastArgs = null;
                }
            }, interval);
        } else {
            // If the function is currently throttled, store the arguments for later execution
            lastArgs = args;
        }
    }
}