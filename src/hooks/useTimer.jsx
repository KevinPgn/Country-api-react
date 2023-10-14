import { useState, useEffect } from 'react';

export const useTimer = (initialValue = 0) => {
    const [timer, setTimer] = useState(initialValue);
    
    useEffect(() => {
        const interval = setInterval(() => {
        setTimer((timer) => timer + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [timer]);
    
    return timer;
};