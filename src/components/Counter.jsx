import { useState } from 'react';


const Counter = () => {

    const [counter, setCounter] = useState(5); // [estado, cambioEstado() ]

    return <h1>Counter: { counter }</h1>
}


export default Counter;