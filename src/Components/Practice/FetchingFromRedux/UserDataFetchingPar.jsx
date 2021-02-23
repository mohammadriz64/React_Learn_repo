import React,{useState,useEffect} from 'react';
import UserDataFetchingChild from './UserDataFetchingChild';
import {useSelector} from 'react-redux';
import {getAllUsers} from '../../../State/Selector/usersInGroupSelector';

const UserDataFetchingPar = () => {
    const selector=useSelector(getAllUsers);
    
    return (
        <div>
            <UserDataFetchingChild/>
            
        </div>
    );
};

export default UserDataFetchingPar;