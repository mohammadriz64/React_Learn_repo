import React,{ useState } from 'react';
import { CondRenChilFun } from './CondRenChilFun';

export const CondRenParFun = () => {
    const [personData,setPersonData]=useState({
        info:[
            {name:"Rizwan",course:"Html"},
            {name:"Aadil",course:"CSS"},

        ],
    });
    const handleNameChange= (name1,name2) => {
        setPersonData({
            info:[
                {name: name1, course: name2},
                {name: "Zahour" ,course:"Data Base"},
    
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
    const handleInputCh= (event) => {
        setPersonData({
            info:[
                {name: event.target.value , course:"react js"},
            ],

        });

    }
    return (
        <div>
            <button onClick={()=>handleNameChange("Imran","Node Js")}>Change State</button>
           <CondRenChilFun
           first={personData.info[0].name}
           firstAge={personData.info[0].course}
           clickPara={handleOnPara}
           inputCh={handleInputCh}
           />
        </div>
    );
};
