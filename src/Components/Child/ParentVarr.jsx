import React from 'react';
import { ChildVarr } from './ChildVarr';

export const ParentVarr = () => {
    return (
        <React.Fragment>
            <ChildVarr name="Student" field="Engineering" technology="ReactJs" />
       
        </React.Fragment>
    );
};

