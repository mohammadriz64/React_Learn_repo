import React, { useState } from 'react';
import CondRender_Child_F from './CondRender_Child_F';

const CondRender_Par_F = () => {
    const [personDetails, setPersonDetails] = useState({
        details: [

            { name: "React Js", course: "Js Library for Front-End" },
            { name: "Node Js", course: "Js Library for Backend " },
            { name: "BootStrap", course: "CSS Library" },

        ],
    })
    return (
        <div>
            <CondRender_Child_F
                name={personDetails.details[0].name}
                course={personDetails.details[0].course}
            />

        </div>
    );
};

export default CondRender_Par_F;