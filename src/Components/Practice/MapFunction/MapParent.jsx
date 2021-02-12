import React,{useState} from 'react';
import { MapChild } from './MapChild';

export const MapParent = () => {
    const [personData,setPersonData]=useState({
        details:[
            {Company:"Audi", Car:"A8"},
            {Company:"BMW", Car:"M3"},
            {Company:"Hyundai", Car:"i20"},
            {Company:"Honda", Car:"Civic"},
    
        ],

    });
   
    return (
        <div>
            {/* mapping starts here */}
            {details.map((fetchedDetails)=>{
                return <MapChild companyName={fetchedDetails.Company}/>
            })}


            
        </div>
    );
};
