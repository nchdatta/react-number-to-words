import { scales, tens, units } from '../constants/number-words';

// Convert a number to words
const convertToWords = (number: number, join: string = 'and'): string => {
    const stringNumber = number.toString();
    let start: number;
    let end: number;
    let chunks: string[];
    let chunksLen: number;
    let chunk: number;
    let ints: number[];
    let i: number;
    let word: string;
    let words: string[] = [];


    // If the number is 0, return 'Zero'
    if (parseInt(stringNumber) === 0) {
        return 'Zero';
    }

    // Number upto 99 (0-99)
    if (number < 100) {
        if (number < 20) {
            return units[number];
        }
        return tens[Math.floor(number / 10)] + (number % 10 ? '-' + units[number % 10] : '');
    }


    /* Split the number into chunks of 3 digits */
    start = stringNumber.length;
    chunks = [];
    while (start > 0) {
        end = start;
        chunks.push(stringNumber.slice((start = Math.max(0, start - 3)), end));
    }

    /* Check if the number is greater than the scales */
    chunksLen = chunks.length;
    if (chunksLen > scales.length) {
        return '';
    }

    // Convert each chunk to words
    words = [];
    for (i = 0; i < chunksLen; i++) {

        chunk = parseInt(chunks[i]);

        if (chunk) {

            // Split chunk into array of individual integers
            ints = chunks[i].split('').reverse().map(parseFloat);

            // If tens integer is 1, i.e. 10, then add 10 to units integer
            if (ints[1] === 1) {
                ints[0] += 10;
            }

            // Add scale word if chunk is not zero and array item exists
            if ((word = scales[i])) {
                words.push(word);
            }

            // Add unit word if array item exists
            if ((word = units[ints[0]])) {
                words.push(word);
            }

            // Add tens word if array item exists
            if ((word = tens[ints[1]])) {
                words.push(word);
            }

            // Add 'join' value after the hundreds place
            if (ints[0] || ints[1]) {

                // Add 'join' value after the hundreds place
                if (ints[2] || !i && chunksLen) {
                    words.push(join);
                }

            }

            // Add hundreds word if array item exists
            if ((word = units[ints[2]])) {
                words.push(word + ' Hundred');
            }

        }

    }

    return words.reverse().join(' ');
}

export { convertToWords };