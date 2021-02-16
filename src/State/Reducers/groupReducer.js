const groupReducer = (state = groupsDefaultState, action) => {
    switch (action, type) {
        case "ADD_NEW_GROUP":
            //(...)this triple dot is spread operator to copy state
            return {
                ...state,
                groups:{action,group,...state,group}
            }
    }
};


const groupsDefaultState = { //we can use groupsInitialState too
    groups: [{
            name: "Redux Practical for Begginers",
            image: "recruiter2.jpg",
            desc: ""

        },
        {},
        {},

    ],
}