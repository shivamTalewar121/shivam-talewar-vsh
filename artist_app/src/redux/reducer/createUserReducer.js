let initialState = {
    name : ''
}

export const createUserReducer = (state=initialState, action)=>{
    switch(action.type){
        case "ADD_USER" : 
        return {
            result :""
        }

        case "EDIT_USER":
                action.setBtn(false)
                action.setFormValue({name: action.payload.name})
                action.setUserId(action.payload.id)
                return state

        case "UPDATE_USER" : 
                    action.setFormValue(initialState)
                    action.setBtn(true)
                    return ""

        case  "DEL_USER": 
            return ""


        default: return state
    }
}