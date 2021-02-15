import React,{useState} from 'react';
import './IncDecNum.css';

const IncDecNum = () => {
    const [number,setNumber] = useState(0);

   const addNumber=()=>{
        setNumber(number+1)
    }

    return (
        <div>
            <div className="main_div">
                <div className="center_div">
                    <div className="btn_div">
                        <h1> {} </h1>
                        <button className="btn_style"onClick={addNumber}>Addition</button>
                        <button className="btn_style">Subtraction</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default IncDecNum;