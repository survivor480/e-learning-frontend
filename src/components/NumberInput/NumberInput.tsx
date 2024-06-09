// NumberInput.tsx

import { ChangeEvent } from "react";

interface NumberInputProps {
    value: number;
    onChange: (value: number) => void;
    placeholder: string;
    min?: number;
    max?: number;
    step?: number;
}

export default function NumberInput({ value, onChange, placeholder, min = 0, max = 100, step = 1 }: NumberInputProps) {
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        if (inputValue === "" || (!isNaN(Number(inputValue)) && Number(inputValue) >= min && Number(inputValue) <= max)) {
            console.log("The input value is: ", inputValue);
            onChange(Number(inputValue));
        }
    };

    const handleIncrement = () => {
        const newValue = value + step;
        if (newValue <= max) {
            onChange(newValue);
        }
    };

    const handleDecrement = () => {
        const newValue = value - step;
        if (newValue >= min) {
            onChange(newValue);
        }
    };

    return (
        <div className="w-full">
            <label>{placeholder}</label>
            <div className="w-full pr-2 py-3 flex items-center">
                <button
                    type="button"
                    onClick={handleDecrement}
                    className="bg-gray-500 text-white px-3 py-1 rounded-l-lg focus:outline-none"
                >
                    -
                </button>
                <input
                    type="text"
                    name="number"
                    placeholder={placeholder}
                    value={value}
                    onChange={handleInputChange}
                    className="focus:outline-none text-center rounded-none px-[10px] py-[5px] text-[#cbd5e1] bg-[#1e293b] w-full"
                />
                <button
                    type="button"
                    onClick={handleIncrement}
                    className="bg-gray-500 text-white px-3 py-1 rounded-r-lg focus:outline-none"
                >
                    +
                </button>
            </div>
        </div>
    );
}
