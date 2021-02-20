import React from 'react';
import './Child.css';

const FetchingDataReduxChild = ({itemCurrent}) => {
    return (
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
            <h3>{itemCurrent.name}</h3>
            <img style={{width:"400px",height:"350px"}} src={itemCurrent.image} alt="bike"/>
        </div>
    );
};

export default FetchingDataReduxChild;