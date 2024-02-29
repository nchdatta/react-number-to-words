import * as React from 'react';

interface NumberInputProps {
    onChange: (amount: number) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({ onChange }) => {
    const [value, setValue] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        if (!isNaN(Number(newValue))) {
            setValue(newValue);
            onChange(Number(newValue));
        }
    };

    return (
        <div>
            <label htmlFor="number">Enter an number:</label>
            <input
                id="number"
                type="number"
                value={value}
                onChange={handleChange}
                style={{
                    display: 'block',
                    width: '100%',
                    padding: '10px',
                    fontSize: '16px',
                    marginTop: '10px',

                }}
            />
        </div>
    );
};

export { NumberInput };
