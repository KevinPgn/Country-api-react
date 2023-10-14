import { useState } from 'react'

export const useMouse = () => {
    const [mouse, setMouse] = useState({ x: 0, y: 0 })
    
    const handleMouseMove = (e) => {
        setMouse({
        x: e.clientX,
        y: e.clientY
        })
    }
    
    return [mouse, handleMouseMove]
}