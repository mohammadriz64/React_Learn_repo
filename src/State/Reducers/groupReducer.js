const groupReducer = (State = groupsDefaultState, action) => {
  switch (action.type) {
    case "ADD_NEW_GROUP":
      //(...)this triple dot is spread operator to copy state
      return {
        ...State,
        groups: [...State.groups, action.groups],
      };
    default:
      return State;
      console.log("State")
  }
};

const groupsDefaultState = {
  //we can use groupsInitialState too
  groups: [
    {
      name: "Redux Practical for Begginers",
      image: "placement.png",
      desc: "recruiters image",
    },
  ],
};
