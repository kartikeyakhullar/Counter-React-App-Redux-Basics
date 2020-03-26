export const increment = ()=>{
    return {
        type : 'INCREMENT'
    }
}

export const decrement = ()=>{
    return {
        type : 'DECREMENT'
    }
}

export const add = (value)=>{
    return {
        type : 'ADD',
        val : value
    }
}

export const subtract = (value)=>{
    return {
        type : 'SUBTRACT',
        val : value
    }
}

export const storeResult = (res)=>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch(saveResult());
        },2000)
    }
}

export const deleteResult = (resId)=>{
    return {
        type : 'DELETE_RESULT',
        id : resId
    }
}

export const saveResult = (res)=>{
    return {
        type : 'STORE_RESULT'
    }
}



