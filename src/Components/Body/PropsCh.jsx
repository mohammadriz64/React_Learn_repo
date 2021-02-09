import React from 'react';

const PropsCh = (props) => {
    return (
        <div>
          <h4>Hello {props.name} a.k.a {props.heroName}</h4>
          {props.children}  
        </div>
    );
};

export default PropsCh;