import React from "react";
import { FetchingDataJson_Child } from "./FetchingDataJson_Child";
import { About_Placement_Reducer } from "../UseStatePractice/State/Reducer/About_Placement_Reducer";

export const FetchingDataJson_Parent = () => {
  return (
    <div>
      {About_Placement_Reducer.visitingRecruiters.map((item) => {
        return <FetchingDataJson_Child itemCurrent={item} />;
      })}
    </div>
  );
};
