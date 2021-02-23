import React from 'react';
import './Child.css';

const FetchingDataReduxChild = ({itemCurrent}) => {
    return (
        <div className="data-container">
            <img className="img_Bike" src={itemCurrent.image} alt="bike"/>
            <h3 className="head">{itemCurrent.name}</h3>
        </div>
    );
};

export default FetchingDataReduxChild;