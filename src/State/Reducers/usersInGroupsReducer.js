// const usersInGroupReducer = (state = usersDefaultState, action) => {
//     switch (action.type) {
//       case "ADD_NEW_USER":
//         //(...)this triple dot is spread operator to copy state
//         return {
//           ...state,
//           users: [...state.users, action.users],
//         };
//       default:
//         return state;
//     }
//   };
  
//   const usersDefaultState = {
//     //we can use groupsInitialState too
//     users: [
//       {
//         name: "Rizwan",
//         image: "placement.png",
//         id:1,
    
//       },
//     ],
//   };

const usersDefaultState={
    users:[
        {name:"React js",
         description:"js library for UI"
    },
        {name:"Node js",
         description:"js library for Backend"
        },

    ],
};

export const usersInGroupsReducer = (state= usersDefaultStat.action)=>{
    switch (action.type){
        case "ADD_NEW_USER":
            return {...state,users:[...state.users,action.users]};
                default:
                    return state;
    }
};
  