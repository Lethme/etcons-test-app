export const wait = async (delay: number = 0) => new Promise(resolve => setTimeout(resolve, delay));