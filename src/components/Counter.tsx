import React, { FC, useState } from 'react'

interface CounterProps {
    initial?: number
}

export const Counter:FC <CounterProps> = ({ initial = 0 }: CounterProps) => {
    const [count, setCount] = useState(initial)
    
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)

    return (
        <div className="counter-container">
            <h1>Counter</h1>
            <div className="count">{count}</div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}