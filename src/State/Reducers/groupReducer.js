const groupReducer =(state=groupsDefaultState,action)=>{
    switch(action,type){
        case "ADD_NEW_GROUP":
            return{...state,}   //(...)this triple dot is spread operator to copy state
    }
};


const groupsDefaultState={     //we can use groupsInitialState too
groups:[
    {name:"Redux Practical for Begginers",
     image:"recruiter2.jpg",
     desc:""

},
    {},
    {},

],
}