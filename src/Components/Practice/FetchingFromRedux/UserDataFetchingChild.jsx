import React from 'react';

const UserDataFetchingChild = ({fetchUser}) => {
    return (
        <div>
            <h4>Course:{fetchUser.name}</h4>
            <h6>description: {fetchUser.description}</h6>
        </div>
    );
};

export default UserDataFetchingChild;