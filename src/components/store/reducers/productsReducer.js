const initState = {
    products : []
}

const productsReducer = (state = initState,action) =>{
    if(action.type === 'Products_Received'){
        return({
            products:action.products
        })
    }
    else if(action.type === 'Products_NotReceived'){
        console.log("The error message"+action.error)
    }
    return state;
}

export default productsReducer;