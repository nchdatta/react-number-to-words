# React Number to Words

This is a React-based npm package that translates/converts numbers into words. It allows developers to easily integrate this functionality into their React applications. This package will help to convert number or amounts into words form.

## Installation

```bash
npm install react-number-to-words


```

## Usage

1. Import the convertToWords function from the package:

```bash
import {convertToWords} from 'react-number-to-words';

```

2. Call the convertToWords function with a number as an argument:

```bash
const number = 123;
const words = convertToWords(number);
console.log(words); // Output: "One Hundred and Tweenty Three"

```

3. (Optional) Use the provided React components for user input and display:

```bash
import {NumberInput, NumberDisplay} from 'react-number-to-words';

```

## Features

- Converts numbers up to trillions into words.
- Supports custom number formatting (currently not implemented, but can be added in the future).

## Contributing

Feel free to submit pull requests for bug fixes, improvements, or new features. We welcome community contributions.

## License

This package is licensed under the MIT License.
