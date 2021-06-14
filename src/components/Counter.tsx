import React, { FC, useState } from 'react'

export const Counter:FC <{ initial?: number }> = ({ initial = 0 }) => {
    const [count, setCount] = useState(initial)
    
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)

    return (
        <>
            <h2>Counter</h2>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}