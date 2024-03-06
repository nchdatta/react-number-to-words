const toOrdinal = (number: number): string => {
    const stringNumber = number.toString();
    const lastTwoDigits = stringNumber.slice(-2);
    const lastDigit = parseInt(lastTwoDigits.slice(-1));
    const lastTwo = parseInt(lastTwoDigits);
    const suffixes = ['th', 'st', 'nd', 'rd'];

    if (lastTwo >= 11 && lastTwo <= 13) {
        return `${number}th`;
    }

    return `${number}${suffixes[lastDigit] || 'th'}`;
}

export { toOrdinal };