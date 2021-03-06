// import {createStore,combineReducers} from 'redux';
// import {groupReducer} from '../Reducers/groupReducer';
// export const configStore = () => {
//     const store = createStore(
//         combineReducers({
//         groupReducer,
    
//     }),
    
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );
//     console.log("grp redusers====>",groupReducer)
//     return store;

// };

import {createStore,combineReducers} from 'redux';
import {groupReducer} from '../Reducers/groupReducer';
import {usersInGroupsReducer} from '../Reducers/usersInGroupsReducer';
export const configStore=()=>{
    const store=createStore(
        combineReducers({
            groupReducer,
            usersInGroupsReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}