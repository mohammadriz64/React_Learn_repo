export const addNewUser =(name,id)=>({
    // under double quotations must write capital letters
    type:"ADD_NEW_USER",
    users:{
        name,
        id,
    },
});