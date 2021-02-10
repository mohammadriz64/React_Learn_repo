import React,{useState} from 'react';

const CounterPract = () => {
    const [addNumber,setAddNumber] = useState(0);
    const handleAddCounter = () =>{
        setAddNumber(addNumber+1);
    }
    const handleDeleteCounter = () =>{
        setAddNumber(addNumber-1);
    }
    const handleDelCounter = (delNumber) =>{
        setAddNumber(addNumber-delNumber);
    }
    const handleImage = () =>{
        setAddNumber(<img src="logo512.png"/>);
    }

    return (
        <div>
            <h1>Increase Number...Decrease Number..</h1> <button>{addNumber}</button>
            <button onClick={handleAddCounter}>Add</button>
            <button onClick={handleDeleteCounter}>Delete</button>
            <button onClick={handleDelCounter.bind(addNumber,2)}>Delete</button> <br/> <br/>
            <button onClick={handleImage}>Load Image</button>
        </div>
    );
};

export default CounterPract;