import React from 'react';
import Radium from 'radium';
const Radium_Parent = () => {
    const styleButton = {
        backgroundColor: "hotpink",
        boxShadow: "0px 0px 2px 3px black",
        ":hover": {
            backgroundColor: "red"

        }
    };
    return (
        <div>
            <h1>Radium Module Practice</h1>
            <button style={styleButton}>submit</button>

        </div>
    );
};

export default Radium(Radium_Parent);