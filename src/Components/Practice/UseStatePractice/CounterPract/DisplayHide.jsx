import React, {useState} from 'react';

export const DisplayHide = () => {
    const [show,setShow] = useState(true)
    const handledisplay = () =>{
        setShow(false);
    }
    return (
        <div>
            <button onClick={()=>setShow(!show)}>Toggle</button>
            <div>
            {show ?(<div><h2>Hello EveryOne</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae iure sunt et nulla illo accusantium enim incidunt numquam unde. Excepturi!</p>
            {/* <input type="text"/> */}
            </div>):null}
            
            {/* <button onClick={()=>setShow(show)}>SHOW</button> */}
            {/* <button onClick={handledisplay}>SHOW</button> */}
            {/* <button onClick={()=>setShow(false)}>HIDE</button> */}
        </div>
        </div>
    );
};


