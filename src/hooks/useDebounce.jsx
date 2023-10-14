import {useEffect, useState} from 'react';

let timeoutId;

export const useDebounce = (value, delay) => {

    const [debouncedValue, setDebouncedValue] = useState(value);
    const [isWaiting, setIsWaiting] = useState(false);

    useEffect(() => {
        console.log("use EFFECT >>>", value)

        if (timeoutId){
            setIsWaiting(true);
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            console.log("DEBOUNCED VALUE >>>", value)
            setDebouncedValue(value);
            setIsWaiting(false);
        }, delay);

        return () => {
            clearTimeout(timeoutId);
        }
    }, [value])

    return {debouncedValue, isWaiting}

}