import { useState } from 'react';

/*
The useClickAway hook is a useful for 
detecting clicks outside a specific component. It allows you to pass a callback function that 
will be triggered whenever a click occurs outside the component’s area. This hook is particularly helpful when 
implementing dropdown menus, modals, or any other UI elements that need to be closed when the user clicks outside of them. 
By attaching event listeners to the document, the hook checks if the click target is within the component’s reference, 
and if not, it invokes the provided callback function.
*/

export const useClickAway = (ref, callback) => {
    const handleClick = e => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }
    });
}