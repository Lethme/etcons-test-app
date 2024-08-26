/**
 * Returns -1 if first date is earlier than second, 1 if later and 0 if they're equal
 * @param date1
 * @param date2
 */
export const compareDates = (date1: Date, date2: Date): number => {
    // Extract the year, month, and day from the first date
    const year1 = date1.getFullYear();
    const month1 = date1.getMonth();
    const day1 = date1.getDate();

    // Extract the year, month, and day from the second date
    const year2 = date2.getFullYear();
    const month2 = date2.getMonth();
    const day2 = date2.getDate();

    // Compare year
    if (year1 < year2) return -1;
    if (year1 > year2) return 1;

    // Compare month
    if (month1 < month2) return -1;
    if (month1 > month2) return 1;

    // Compare day
    if (day1 < day2) return -1;
    if (day1 > day2) return 1;

    // If all are equal
    return 0;
}