const reducer = (state=initialState, action) =>{
    switch(action.type){
        case 'INCREMENT':
            return{
                ...state,
                counter:state.counter+1
            }            
        case 'DECREMENT':
            return{
                ...state,
                counter:state.counter-1
            }    
        case 'RESET':
            return{
                ...state,
                counter:0
            }    
    }
    return state
}

const initialState = {
    counter: 20
}

export default reducer