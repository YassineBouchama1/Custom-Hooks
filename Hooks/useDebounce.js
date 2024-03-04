import React, { useState, useEffect } from "react";

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

export default function App() {
    const [inputValue, setInputValue] = useState("");
    const debouncedValue = useDebounce(inputValue, 500);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <p>Debounced value: {debouncedValue}</p>
        </div>
    );
}