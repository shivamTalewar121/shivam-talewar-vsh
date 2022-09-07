let initialState={
    id:'',
    name:'',
    albums:[
        {id:'',
        name:'',
        url:'',
        rating:""
    }
    ]
}

export const RatingReducer = (state=initialState, action)=>{
    switch(action.type){
        case "GET_RATING": 
        break;

        default:
            return state
            break;
    }
}