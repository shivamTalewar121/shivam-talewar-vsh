import axios from "axios"

export const addUser = (uid, name) => dispatch=>{
    // return {
    //     type: "ADD_USER",
    //     payload:{
    //         uid: uid,
    //         name: name,
    //     }
    // }
    axios.post('http://localhost:3000/users', {uid:uid, name: name})
    .then(res=>{
        console.log(res.data)
        dispatch(getUsers())
    })
}

export const editUser = (id, setFormValue, setBtn, setUserId) => dispatch =>{
    axios.get(`http://localhost:3000/users/${id}`).then(res=>{
        console.log(res.data)
        dispatch({
            type:"EDIT_USER",
            payload:res.data,
            setFormValue : setFormValue,
            setBtn : setBtn,
            setUserId: setUserId
        })
    })
}


export const updateUser = (id, name, setBtn, setFormValue)=>dispatch =>{
    axios.put(`http://localhost:3000/users/${id}`,{name: name
    })
    .then(res=>{
        dispatch({
            type: "UPDATE_USER",
        payload : {
            id : id,
            name: name
        },
        setBtn: setBtn,
        setFormValue: setFormValue
        })
        dispatch(getUsers())
    })

}


export const getUsers = ()=>dispatch=>{
    axios.get('http://localhost:3000/users').then(res=>{
        dispatch({
            type: "GET_USERS",
            payload: res.data
        })
    })
}


export const delUsers = (id) =>dispatch =>{
    // return {
    //     type: "DEL_USER",
    //     payload:{
    //         id: id
    //     }
    // }
    axios.delete(`http://localhost:3000/users/${id}`)
    .then(res=>{
        dispatch(getUsers())
    })
}