import styled from '@emotion/styled';
import { useState } from 'react';

import './Counter.css';

const BtnDiminish = styled.button`
    color: snow;
    padding: 1rem;
    background-color: #8d1010;

    &:hover {
        background-color: #a12121;
        font-weight: bold;
    }
`

const Counter = () => {

    const [counter, setCounter] = useState(5); // [estado, cambioEstado() ]

    const handleClick = () => {
        setCounter(counter + 1);
    }

    const handleDiminish = () => {
        setCounter(counter - 1);
    }

    return (
        <div>
            <h1>Counter: { counter }</h1>
            <button style={{
                padding: "1rem",
                backgroundColor: "#723763",
            }} onClick={ handleClick }>Add</button>
            <BtnDiminish onClick={handleDiminish}>Diminish</BtnDiminish>
        </div> 
    )
}


export default Counter;