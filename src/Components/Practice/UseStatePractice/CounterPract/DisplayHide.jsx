import React, {useState} from 'react';

export const DisplayHide = () => {
    const [show,setShow] = useState(true)
    const handledisplay = () =>{
        setShow(false);
    }
    return (
        <div>
            <div>
            {show &&(<h2>Hello EveryOne</h2>)}
            
            <button onClick={()=>setShow(!show)}>SHOW</button>
            {/* <button onClick={handledisplay}>SHOW</button> */}
            {/* <button onClick={()=>setShow(false)}>HIDE</button> */}
            {/* <button onClick={()=>setShow(!show)}>Toggle</button> */}
        </div>
        </div>
    );
};


