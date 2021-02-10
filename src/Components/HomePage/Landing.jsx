import React from 'react';
import PropsPar from '../Body/PropsPar';
import { ParentVarr } from "../Child/ParentVarr";
import { CondRenParFun } from '../ConditinalRendering/CondRenParFun';
import CounterPract from '../Practice/UseStatePractice/CounterPract/CounterPract';
import ClassCompParent from '../PropsWithClassComp/ClassCompParent';

export const Landing = () => {
    return (
        <div>
            <ParentVarr />
            <ClassCompParent />
            <PropsPar/>
            <CondRenParFun/>
            <CounterPract/>
        </div>
    );
};
