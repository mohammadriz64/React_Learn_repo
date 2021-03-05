import React from 'react';
import styled from 'styled-components';

const StyledComponentPar = () => {
    const StyledButton = styled.button`
    background-color:green;
    &:hover{
        background-color:yellow;
        color:white;
    },
    `
    const ColorMe = styled.h3`
    color:blue;
    background-color:grey;
    text-align:center;
    width:50%;
    margin-left:27%;
    &:hover{
        transform:scale(1.2);
    }
    `
    return (
        <div>
            <StyledButton>submit</StyledButton>
            <ColorMe>Working in Styled Components</ColorMe>

        </div>
    );
};

export default StyledComponentPar;