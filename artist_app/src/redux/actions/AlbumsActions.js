import axios from "axios"

export const addAlbum = (name) => dispatch=>{
    axios.post('http://localhost:3000/albums', {name: name})
    .then(res=>{
        console.log(res.data)
        dispatch(getAlbums())
    })
}

export const editAlbum = (id, setFormValue, setBtn, setAlbumId) => dispatch =>{
    axios.get(`http://localhost:3000/albums/${id}`).then(res=>{
        console.log(res.data)
        dispatch({
            type:"EDIT_ALBUM",
            payload:res.data,
            setFormValue : setFormValue,
            setBtn : setBtn,
            setAlbumId: setAlbumId
        })
    })
}


export const updateAlbum = (id, name, setBtn, setFormValue)=>dispatch =>{
    axios.put(`http://localhost:3000/albums/${id}`,{name: name
    })
    .then(res=>{
        dispatch({
            type: "UPDATE_ALBUM",
        payload : {
            id : id,
            name: name
        },
        setBtn: setBtn,
        setFormValue: setFormValue
        })
        dispatch(getAlbums())
    })
}

export const getAlbums = ()=>dispatch=>{
    axios.get('http://localhost:3000/albums').then(res=>{
        dispatch({
            type: "GET_ALBUMS",
            payload: res.data
        })
    })
}


export const delAlbums = (id) =>dispatch =>{
    axios.delete(`http://localhost:3000/albums/${id}`)
    .then(res=>{
        console.log(res)
        dispatch(getAlbums())
    })
}