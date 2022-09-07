import axios from 'axios';

export const getRatings = () => dispatch=>{
    axios.get('http://localhost:3000/user-rating')
    .then(res=>{
        console.log(res.data)
        dispatch({
            type:'GET_RATING',
            payload:res.data
        })
    })
}