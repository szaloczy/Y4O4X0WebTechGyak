import React, {useState} from "react"

function Counter(){
    
    const [num, setNum] = useState(0);

    const increment = () => {
        setNum(n => n + 1); //UPDATER FUNCTIONS
        setNum(n => n + 1);
        setNum(n => n + 1);
    }

    const decrement = () => {
        setNum(n => n - 1);
        setNum(n => n - 1);
        setNum(n => n - 1);
    }

    const restore = () => {
        setNum(n => n = 0);
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