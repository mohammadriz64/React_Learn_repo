import React from 'react';

export const ChildVarr = (item) => {
    return (
        <div>
            <h2>Props with functional Component</h2>
            <p>Hello!!! I am a {item.name} of {item.field} </p>
            <p>I'm learning {item.technology} </p>
            
        </div>
    );
};
