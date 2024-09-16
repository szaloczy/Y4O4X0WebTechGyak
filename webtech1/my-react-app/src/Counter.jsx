import React, {useState} from "react"

function Counter(){
    
    const [num, setNum] = useState(0);

    const increment = () => {
        setNum(num + 1);
    }

    const decrement = () => {
        setNum(num - 1);
    }

    const restore = () => {
        setNum(0);
    }

    return(
        <>
        <p>{num}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={restore}>restore</button>
        </>
    );
}

export default Counter