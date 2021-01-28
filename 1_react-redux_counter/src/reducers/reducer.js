const reducer = (state=initialState, action) =>{
    if(action.type === 'INCREMENT'){
        return{
            ...state,
            counter:state.counter+1
        }
    }
    return state
}

const initialState = {
    counter: 20
}

export default reducer