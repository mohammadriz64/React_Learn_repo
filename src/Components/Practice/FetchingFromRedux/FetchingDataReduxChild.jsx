import React from 'react';

const FetchingDataReduxChild = ({itemCurrent}) => {
    return (
        <div>
            <h3>{itemCurrent.name}</h3>
            <img style={{width:"400px",height:"350px"}} src={itemCurrent.image} alt="bike"/>
        </div>
    );
};

export default FetchingDataReduxChild;