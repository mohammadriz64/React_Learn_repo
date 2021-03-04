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
    const divStyle = {
        border: "1px solid grey",
        backgroundColor: "lightgrey",
        zIndex: "1",
        textAlign: "center",
        width: "600px",
        position: "relative",
        left: "25%",
        ":hover": {
            width: "800px"

        }
    }
    return (
        <div style={divStyle}>
            <h1>Radium Module Practice</h1>
            <button style={styleButton}>submit</button>

        </div>
    );
};

export default Radium(Radium_Parent);