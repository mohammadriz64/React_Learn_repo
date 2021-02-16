import React,{useState} from 'react';
import './IncDecNum.css';

const IncDecNum = () => {
    const [number,setNumber] = useState(0);

   const addNumber=()=>{
        setNumber(number+1);
    }
   const subNumber=()=>{
       if(number>0){
        setNumber(number-1);
       }else{
           alert('Sorry.Limit Reached.!!!')
           setNumber(0);
       }
    }

    return (
        <div>
            <div className="main_div">
                <div className="center_div">
                <h3>onClick Events</h3>
                    <div className="btn_div">
                        <h1> {number} </h1>
                        <button className="btn_style" onClick={addNumber}>Addition</button>
                        <button className="btn_style" onClick={subNumber}>Subtraction</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default IncDecNum;