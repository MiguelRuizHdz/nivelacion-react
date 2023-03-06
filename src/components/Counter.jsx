import { useState } from 'react';


const Counter = () => {

    const [counter, setCounter] = useState(5); // [estado, cambioEstado() ]

    const handleClick = () => {
        setCounter(counter + 1);
    }

    return (
        <>
            <h1>Counter: { counter }</h1>
            <button onClick={ handleClick }>Add</button>
        </>
    )
}


export default Counter;