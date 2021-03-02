import React, { useState } from 'react';
import CondRender_Child_F from './CondRender_Child_F';

const CondRender_Par_F = () => {
    const [personDetails, setPersonDetails] = usestate({
        details: [

            { name: "React Js", course: "Js Library for Front-End" },
            { name: "Node Js", course: "Js Library for Backend " },
            { name: "React", course: "Js Library" },

        ],
    })
    return (
        <div>
            <CondRender_Child_F />

        </div>
    );
};

export default CondRender_Par_F;