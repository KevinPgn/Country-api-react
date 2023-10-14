import { useState } from 'react'

export const useToggle = (inition = false) => {
    const [value, setValue] = useState(inition)
    const toggle = () => setValue(v => !v)
    return {value, toggle}
}