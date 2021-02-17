import {createStore,combineReducer} from 'redux';
const configStore =()=>{
    const store = createStore(
        combineReducers({
        groupReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX__REDUX_DEVTOOLS__EXTENSION__()
    );
    return Store;

};