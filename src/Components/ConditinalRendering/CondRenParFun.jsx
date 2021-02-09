import React,{ useState } from 'react';
import { CondRenChilFun } from './CondRenChilFun';

export const CondRenParFun = () => {
    const [personData,setPersonData]=useState("Mohammad Rizwan");
    const handleNameChange=()=>{
        setPersonData(personData);

    };
    return (
        <div>
            <button onClick={handleNameChange}></button>
           <CondRenChilFun/> 
           <CondRenChilFun/> 
           <CondRenChilFun/> 
        </div>
    );
};
