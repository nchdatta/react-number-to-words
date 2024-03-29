import * as React from 'react';
import { convertToWords } from '../index';

interface NumberDisplayProps {
    number: number;
}

const NumberDisplay: React.FC<NumberDisplayProps> = ({ number }) => (
    <div>
        <p>Number entered: {number}</p>
        <p>Number in words: {convertToWords(number)}</p>
    </div>
);

export { NumberDisplay };
