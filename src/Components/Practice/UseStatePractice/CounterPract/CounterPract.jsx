import React,{useState} from 'react';

const CounterPract = () => {
    const [addNumber,setAddNumber] = useState(0);
    const handleAddCounter = () =>{
        setAddNumber(addNumber+1);
    }
    const handleDeleteCounter = () =>{
        setAddNumber(addNumber-1);
    }

    return (
        <div>
            <h1>Increase Number...Decrease Number..</h1> <button>{addNumber}</button>
            <button onClick={handleAddCounter}>Add</button>
            <button onClick={handleDeleteCounter}>Delete</button>
        </div>
    );
};

export default CounterPract;