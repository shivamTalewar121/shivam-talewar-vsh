import React,{useEffect, useState} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { delArtists, addArtist, editArtist, updateArtist, getArtists} from '../redux/actions/ArtistActions'

const Albums = () => {

  let initialValue = {name: ""}

    const dispatch = useDispatch()

    const [artistId, setArtistId] = useState()

    const [formValue, setFormValue] = useState(initialValue)

    const [btn, setBtn] = useState(true)

    let artistData = useSelector((state)=>state.UserReducer.artistList)

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormValue({ ...formValue, [name]: value })
    }

    const handleClick = (event, uid, name) => {
        event.preventDefault()
        dispatch(addArtist(uid,name))
        setFormValue({uid:'', name:''})
    }

    useEffect(() => {
        dispatch(getArtists())
    }, [dispatch])

    const handleEdit = async (event, id) => {
        dispatch(editArtist(id, setFormValue, setBtn, setArtistId))
    }

    const handleDelete = async (e, id) => {
        dispatch(delArtists(id))
    }

    const handleUpdate = async () => {
        dispatch(updateArtist(artistId,formValue.name, setBtn, setFormValue))
    }

    const handleSelect = (event) =>{
        console.log(event.target.value)
    }

    return (
        <div className='container-fluid'>
            <select onChange={handleSelect} name="fruits" id="fruit-select">
                {artistData.map((option, index) => (
                  <option key={index} value={option.name}>
                    {option.name}
                  </option>
                ))}
            </select>
            <div className='artist-input'>
                <h3 className='text-center'>Albums</h3>
                <div className='input-box text-center'>
                    <div className='container input-content' style={{display:'flex',justifyContent:'center',marginTop:'20px', width:'420px'}}>
                        <label className='me-3' style={{fontWeight:'bold'}}>Name:</label>
                        <input type='text' className='form-control' name='name' onChange={handleChange} value={formValue.name}/>
                    </div>
                    {btn === true ? <button className='btn btn-primary add mt-4' id='add' onClick={(e)=>handleClick(e,formValue.name)}>Add</button> : <button className='btn btn-success update mt-4' id='update' onClick={handleUpdate}>Update</button>}
                </div>
            </div>
            <div className='text-center mt-5'>
                <table className='table shadow'>
                    <thead>
                    <tr className='table-dark'>
                        <th>ALID</th>
                        <th>AID</th>
                        <th>NAME</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                    </thead>
                    <tbody className='table-primary'>
                    {
                                artistData.map((artist) => {
                                    return (
                                        <tr key={artist.id}>
                                            <td>alid{artist.id}</td>
                                            <td>a{artist.id}</td>
                                            <td>{artist.name}</td>
                                            <td><button className='btn btn-warning' onClick={(e) => handleEdit(e, artist.id)}>edit</button></td>
                                            <td><button className='btn btn-danger' onClick={(e) => handleDelete(e, artist.id)}>delete</button></td>
                                        </tr>
                                    )
                                })
                            }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Albums