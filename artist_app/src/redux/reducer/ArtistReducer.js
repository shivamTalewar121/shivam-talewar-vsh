let initialState = {
    name : '',
    artistList: []
}

export const ArtistReducer = (state=initialState, action)=>{
    switch(action.type){

        case "ADD_ARTIST" : 
        return {
            result :""
        }

        case "EDIT_ARTIST":
            action.setBtn(false)
            action.setFormValue({name: action.payload.name})
            action.setArtistId(action.payload.id)
            return state

            case "UPDATE_ARTIST" : 
            action.setFormValue(initialState)
            action.setBtn(true)
            return ""


        case  "DEL_ARTIST": 
            return ""


        default: return state
    }
}