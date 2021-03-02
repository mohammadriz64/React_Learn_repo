import React, { useState } from "react";

const Delete_User = () => {
    const users = [
        {
            name: "Rizwan",
            learning: "React Js"
        },
        {
            name: "Aadil",
            learning: "JavaScript"
        },
        {
            name: "Salman",
            learning: "Node Js"
        },
    ];
    const [userData, setUserData] = useState(users);

    const removeUserName = (index) => {
        const newUserData = [...userData];
        newUserData.splice(index, 1);
        setUserData(newUserData);
    };
    return (
        <div>

            {userData.map((items, index) => {
                return <ul> <li onClick={removeUserName}>{items.name}</li>
                    <li>{items.learning}</li>
                </ul>
                    ;
            })}

        </div>
    );
};

export default Delete_User;
