import React from 'react';

export const CondRenChilFun = (item) => {
    
    return (
        <div>
           <p onClick={item.clickPara}>This is {item.first} and I'm Learning {item.firstAge}</p>
           <input type="text" onChange={item.inputCh}/>
        </div>
    );
};
