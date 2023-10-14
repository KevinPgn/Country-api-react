import { useState } from 'react'

export const useCounter = (initial = 0, step = 1) => {
  const [value, setValue] = useState(initial)
  return {
    count: value,
    increment: () => setValue(v => v >= 0 ? v + step : v),
    decrement: () => setValue(v => v <= 1 ? v : v - step),
    set: (v) => setValue(v),
    reset: () => setValue(initial)
  }
}