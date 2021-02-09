import React,{ useState } from 'react';
import { CondRenChilFun } from './CondRenChilFun';

export const CondRenParFun = () => {
    const [personData,setPersonData]=useState({
        info:[
            {name:"Rizwan",course:"Html"},
            {name:"Aadil",course:"CSS"},

        ],
    });
    const handleNameChange= () => {
        setPersonData({
            info:[
                {name:"Aamer Sohel",course:"Front End"},
                {name:"Salman Khan",course:"Data Base"},
    
            ],

        });

    }
    const handleOnPara= () => {
        setPersonData({
            info:[
                {name:"John Wick",course:"Hollywood"},
            ],

        });

    }
    return (
        <div>
            <button onClick={handleNameChange}>Change State</button>
           <CondRenChilFun
           first={personData.info[0].name}
           firstAge={personData.info[0].course}
           clickPara={handleOnPara}
           />
        </div>
    );
};
