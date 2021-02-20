// const groupReducer = (state = groupsDefaultState, action) => {
//   switch (action.type) {
//     case "ADD_NEW_GROUP":
//       //(...)this triple dot is spread operator to copy state
//       return {
//         ...state,
//         groups: [...state.groups, action.groups],
//       };
//     default:
//       return state;
//   }
// };

// const groupsDefaultState = {
//   //we can use groupsInitialState too
//   groups: [
//     {
//       name: "Redux Practical for Begginers",
//       image: "placement.png",
//       desc: "recruiters image",
//     },
//   ],
// };

const groupsDefaultState = {
  groups: [
    { name: "Aadil", image: "BMW.jpg", desc: "working with redux" },
    { name: "Faazil", image: "kawasaki.jpg", desc: "living in bangaluru" },
    { name: "Rizwan", image: "KTM.png", desc: "working with redux with Aadil" },
  ],
};

export const groupReducer = (state = groupsDefaultState, action) => {
  switch (action.type) {
    case "ADD_NEW_GROUP":
      return { ...state, groups: [...state.groups, action.groups] };
    default:
      return state;
  }
};
