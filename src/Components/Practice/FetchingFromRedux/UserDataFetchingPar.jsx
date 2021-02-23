import React,{useState,useEffect} from 'react';
import UserDataFetchingChild from './UserDataFetchingChild';
import {useSelector} from 'react-redux';
import {getAllUsers} from '../../../State/Selector/usersInGroupSelector';

const UserDataFetchingPar = () => {
    const selector=useSelector(getAllUsers);
    const [userData,setUserData]=useState();
    useEffect(()=>{
        setUserData(selector);
    },
    [selector]
    );
    return (
        <div>
            {userData&&userData.map((userItem)=>{
                return <UserDataFetchingChild fetchUser={userItem}
                key={userItem.id}/>;
            })}
            
            
        </div>
    );
};

export default UserDataFetchingPar;