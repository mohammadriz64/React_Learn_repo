import React from 'react';
import PropsPar from '../Body/PropsPar';
import { ParentVarr } from "../Child/ParentVarr";
import PropWithClass from '../Child/PropWithClass';
import { CondRenParFun } from '../ConditinalRendering/CondRenParFun';
import { MapParent } from '../Practice/MapFunction/MapParent';
import CounterPract from '../Practice/UseStatePractice/CounterPract/CounterPract';
import {DisplayHide} from '../Practice/UseStatePractice/CounterPract/DisplayHide';
import ClassCompParent from '../PropsWithClassComp/ClassCompParent';

export const Landing = () => {
    return (
        <div>
            <ParentVarr />
            <ClassCompParent />
            <PropsPar/>
            <CondRenParFun/>
            <CounterPract/>
            <DisplayHide/>
            <PropWithClass/>
            <MapParent/>
        </div>
    );
};
