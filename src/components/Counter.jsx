import { useState } from 'react';
import './Counter.css';

const Counter = () => {

    const [counter, setCounter] = useState(5); // [estado, cambioEstado() ]

    const handleClick = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
            <h1>Counter: { counter }</h1>
            <button onClick={ handleClick }>Add</button>
        </div>
    )
}


export default Counter;