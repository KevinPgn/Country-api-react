import { useState } from 'react';

export const useInputValue = (initialValue = '') => {
    const [valueInput, setValueInput] = useState(initialValue);
    const onChange = e => setValueInput(e.target.value);
    return { valueInput, onChange };
}