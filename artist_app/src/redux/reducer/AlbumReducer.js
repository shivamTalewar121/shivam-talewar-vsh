let initialState = {
    name: '',
}

export const AlbumReducer = (state = initialState, action) => {
    switch (action.type) {

        case "ADD_ALBUM":
            return {
                result: ""
            }

        case "EDIT_ALBUM":
            action.setBtn(false)
            action.setFormValue({ name: action.payload.name })
            action.setAlbumId(action.payload.id)
            return state

        case "UPDATE_ALBUM":
            action.setFormValue(initialState)
            action.setBtn(true)
            return ""


        case "DEL_ALBUM":
            return ""


        default: return state
    }
}