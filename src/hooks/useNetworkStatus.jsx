import {useEffect, useState} from 'react';

export const useNetworkStatus = () => {
    const [newtworkStatus, setNetworkStatus] = useState(navigator.onLine);

    useEffect(() => {
        window.addEventListener('online', () => setNetworkStatus(true));
        window.addEventListener('offline', () => setNetworkStatus(false));
    }, []);

    return newtworkStatus;
}