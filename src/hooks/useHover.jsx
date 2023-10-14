import { useState } from 'react'

export const useHover = (hover = false) => {

    const [hovering, setHovering] = useState(hover)  
    const onMouseOver = () => setHovering(true)
    const onMouseOut = () => setHovering(false)
    return { hovering, onMouseOver, onMouseOut }
}