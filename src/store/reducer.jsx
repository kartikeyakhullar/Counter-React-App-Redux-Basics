const initialState = {
    counter : 0,
    result : []
}

const rootReducer = (state=initialState,action)=>{
    if(action.type === 'INCREMENT'){
        return {
            ...state,
            counter : state.counter + 1
        }
    }
    if(action.type === 'DECREMENT'){
        return {
            ...state,
            counter : state.counter - 1
        }
    }
    if(action.type === 'ADD'){
        return {
            ...state,
            counter : state.counter + action.val
        }
    }
    if(action.type === 'SUBTRACT'){
        return {
            ...state,
            counter : state.counter - action.val
        }
    }
    if(action.type === 'STORE_RESULT'){
        return {
            ...state,
            result : state.result.concat({id : new Date(),value : state.counter})
        }
    }
    if(action.type === 'DELETE_RESULT'){
        const updatedArray = state.result.filter((res)=>res.id!==action.id)
        return {
            ...state,
            result : updatedArray
        }
    }
    
    return state;
}

export default rootReducer;