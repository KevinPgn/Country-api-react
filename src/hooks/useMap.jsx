import {useState} from 'react';

export const useMap = (initialValue = {}) => {
    const [map, setMap] = useState(initialValue);
    
    return [
        map,
        {
        set: (key, entry) => {
            setMap((prev) => ({...prev, [key]: entry}));
        },
        setAll: (newMap) => {
            setMap(newMap);
        },
        remove: (key) => {
            setMap((prev) => {
            const {[key]: _, ...rest} = prev;
            return rest;
            });
        },
        reset: () => setMap(initialValue),
        },
    ];
    }