import React from 'react';

const UserDataFetchingChild = ({fetchUser}) => {
    return (
        <div>
            <p>Course:{fetchUser.name}</p>
        </div>
    );
};

export default UserDataFetchingChild;