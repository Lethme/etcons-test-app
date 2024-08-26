export const castClassRecord = (classObject: Record<string, boolean>): string => {
    if (classObject) {
        return Object.keys(classObject)
            .filter(key => classObject[key])
            .join("");
    }

    return "";
}