import axios from "axios"

export const addArtist = (name) => dispatch=>{
    axios.post('http://localhost:3000/artists', {name: name})
    .then(res=>{
        console.log(res.data)
        dispatch(getArtists())
    })
}

export const editArtist = (id, setFormValue, setBtn, setArtistId) => dispatch =>{
    axios.get(`http://localhost:3000/artists/${id}`).then(res=>{
        console.log(res.data)
        dispatch({
            type:"EDIT_ARTIST",
            payload:res.data,
            setFormValue : setFormValue,
            setBtn : setBtn,
            setArtistId: setArtistId
        })
    })
}


export const updateArtist = (id, name, setBtn, setFormValue)=>dispatch =>{
    axios.put(`http://localhost:3000/artists/${id}`,{name: name
    })
    .then(res=>{
        dispatch({
            type: "UPDATE_ARTIST",
        payload : {
            id : id,
            name: name
        },
        setBtn: setBtn,
        setFormValue: setFormValue
        })
        dispatch(getArtists())
    })
}

export const getArtists = ()=>dispatch=>{
    axios.get('http://localhost:3000/artists').then(res=>{
        dispatch({
            type: "GET_ARTISTS",
            payload: res.data
        })
    })
}


export const delArtists = (id) =>dispatch =>{
    axios.delete(`http://localhost:3000/artists/${id}`)
    .then(res=>{
        console.log(res)
        dispatch(getArtists())
    })
}