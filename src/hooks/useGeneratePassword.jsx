import {useCallback, useState} from 'react';

export const useGeneratePassword = (passwordLength) => {

    const [generatedPassword, setGeneratedPassword] = useState('');

    const generatePassword = useCallback(() => {
        const minimumPasswordLength = passwordLength && passwordLength > 8 ? passwordLength : 12;
        const passwordCharset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#&-_/$*!?=.^';
        let generatePassword = '';
        for (let i = 0; n = passwordCharset.length, i < minimumPasswordLength; ++i) {
            generatePassword += passwordCharset.charAt(Math.floor(Math.random() * n));
        }
        setGeneratePassword(generatePassword);
}, [passwordLength]);

    return {generatedPassword, generatePassword};
}