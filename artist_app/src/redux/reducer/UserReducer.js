let initialValue={
    userList: [],
    artistList:[]
}

export const UserReducer =(state= initialValue, action)=>{
    switch(action.type){
        case "GET_USERS" : return{
            ...state, userList : action.payload
        }

        case "GET_ARTISTS" : return{
            ...state, artistList : action.payload
        }

        default:
            return state
    }
}