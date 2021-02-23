import React,{useEffect,useState} from 'react';
import FetchingDataReduxChild from './FetchingDataReduxChild';
import {useSelector} from 'react-redux';
import {getAllGroups} from '../../../State/Selector/groupSelector';
import {getAllUsers} from '../../../State/Selector/usersInGroupSelector';


const FetchingDataReduxPar = () => {
    const selector =useSelector(getAllGroups);
    const [groupData,setGroupData]=useState();
    useEffect(()=>{
        setGroupData(selector);
    },
    [selector]
     );
    return (
        <div>
            {groupData &&
            groupData.map((item)=>{
                return <FetchingDataReduxChild itemCurrent={item}/>
            })}
            
        </div>
    );
};

export default FetchingDataReduxPar;