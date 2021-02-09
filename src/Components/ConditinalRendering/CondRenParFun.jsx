import React,{ useState } from 'react';
import { CondRenChilFun } from './CondRenChilFun';

export const CondRenParFun = () => {
    const [personData,setPersonData]=useState({
        info:[
            {name:"Rizwan",course:"Html"},
            {name:"Aadil",course:"CSS"},

        ],
    });
    // const handleNameChange=()=>{
    //     setPersonData(personData);


    return (
        <div>
            {/* <button onClick={handleNameChange}>Change State</button> */}
           <CondRenChilFun
           first={personData.info[0].name}
           firstAge={personData.info[0].course}/> 
           <CondRenChilFun/> 
           <CondRenChilFun/> 
        </div>
    );
};
