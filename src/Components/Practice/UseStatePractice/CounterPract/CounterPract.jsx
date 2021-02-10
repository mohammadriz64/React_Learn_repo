import React,{useState} from 'react';

const CounterPract = () => {
    const [addNumber,setAddNumber] = useState(0);
    const handleCounter = () =>{
        setAddNumber(addNumber+1);
    }
    return (
        <div>
            <h1>Increase Number...</h1> <button>{addNumber}</button>
            {/* <button onClick={handleCounter}>Add</button> */}
            <h1>Decrease Number...</h1>
            <button>Delete</button>
        </div>
    );
};

export default CounterPract;