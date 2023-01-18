import { useState } from 'react'
import './Counter.scss'
export function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count - 1)
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Increment
      </button>
    </div>
  )
}
