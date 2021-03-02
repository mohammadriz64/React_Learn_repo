import React from 'react';
import Delete_User from '../Body/Delete_User';
import PropsPar from '../Body/PropsPar';
import { Students_Admission_Form } from '../Body/Students_Admission_Form';
import { ParentVarr } from "../Child/ParentVarr";
import PropWithClass from '../Child/PropWithClass';
import { CondRenParFun } from '../ConditinalRendering/CondRenParFun';
import Enable_Disable_Button from '../ConditinalRendering/Enable_Disable_Button';
import { FetchingDataJson_Parent } from '../Practice/FetchingDataFromJson/FetchingDataJson_Parent';
import FetchingDataReduxPar from '../Practice/FetchingFromRedux/FetchingDataReduxPar';
import UserDataFetchingPar from '../Practice/FetchingFromRedux/UserDataFetchingPar';
import { MapParent } from '../Practice/MapFunction/MapParent';
import CounterPract from '../Practice/UseStatePractice/CounterPract/CounterPract';
import { DisplayHide } from '../Practice/UseStatePractice/CounterPract/DisplayHide';
import IncDecNum from '../Practice/UseStatePractice/CounterPract/IncrementDecrementNumber/IncDecNum';
import ClassCompParent from '../PropsWithClassComp/ClassCompParent';

export const Landing = () => {
    return (
        <div>
            <Delete_User />
            {/* <Students_Admission_Form/> */}
            <ParentVarr />
            <ClassCompParent />
            <PropsPar />
            <CondRenParFun />
            <CounterPract />
            <DisplayHide />
            <PropWithClass />
            <MapParent />
            <FetchingDataJson_Parent />
            <IncDecNum />
            <FetchingDataReduxPar />
            <UserDataFetchingPar />
            <Enable_Disable_Button />
        </div>
    );
};
