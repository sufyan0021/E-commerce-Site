const initState = {
    categories:[]
}

const categoriesReducer = (state = initState,action) =>{
    if(action.type === 'Categories_Received'){
        //console.log("Data received in reducer"+JSON.stringify(action.categories));
        return({
            categories:action.categories
        })
    }
    else if(action.type === 'Categories_NotReceived'){
        console.log("The error message"+action.error)
    }
    return state;
}

export default categoriesReducer;