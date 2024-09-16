import React, { useState } from 'react';

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [logic, setLogic] = useState(false);

    const updateName = () => {
    setName("Spongebob");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const changeLogic = () => {
        setLogic(!logic)
    }

    return(
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set name</button>
        
        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment age</button>
        
        <p>Logic: {logic ?  "Yes" : "No"}</p>
        <button onClick={changeLogic}>Change logic</button>
    </div>);

}

export default MyComponent