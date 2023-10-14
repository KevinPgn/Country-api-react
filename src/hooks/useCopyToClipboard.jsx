import { useCallback, useEffect, useState } from "react";

export const useCopyToClipboard = (text) => {

    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = useCallback(async () => {
        try{
            if("clipboard" in navigator){
                await navigator.clipboard.writeText(text);
            } else {
                document.execCommand('copy', true, text);
            }
            setIsCopied(true);
        } catch (error){
            console.error("failed to copy", error);
        }
    }, [text]);

    useEffect(() => () => setIsCopied(false), [text]);

    return {isCopied, copyToClipboard}

}