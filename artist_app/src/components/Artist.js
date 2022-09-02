import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Artist = () => {

    const [artistId, setArtistId]=useState()

    const initialValue = { aid: '', name: '' }

    const [formValue, setFormValue] = useState(initialValue)

    const { aid, name } = formValue

    const [artists, setArtists] = useState([])

    const [btn, setBtn]=useState(true)

    const getApi = async () => {
        try {
            let result = await axios.get('http://localhost:3000/artists')
            setArtists(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormValue({ ...formValue, [name]: value })
    }

    const handleClick = async (event) => {
            event.preventDefault()
            try {
                const result = await axios.post('http://localhost:3000/artists', {
                    aid: aid, name: name
                })
                setArtists([...artists, result.data])
            } catch (error) {
                console.log(error)
            }
            setFormValue(initialValue)
    }

    useEffect(() => {
        getApi()
    }, [formValue, artists])

    const handleEdit = async (event, id) => {
        setBtn(false)
        setArtistId(id)
        try {
            const result = await axios.get(`http://localhost:3000/artists/${id}`);
            setFormValue({aid: result.data.aid, name: result.data.name})
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async (e, id) => {
        try{
            await axios.delete(`http://localhost:3000/artists/${id}`)
        }catch(error){
            console.log(error)
        }
    }

    const handleUpdate = async () =>{
        try{
            await axios.put(`http://localhost:3000/artists/${artistId}`, {
                aid: aid, name: name
            })
        } catch(error){
            console.log(error)
        }
        setFormValue(initialValue)
        setBtn(true)
    }

    return (
        <div className='main-page'>
            <div className='main-page__content'>
                <div className='content-input'>
                    <h1>Artists List</h1>
                    <div className='input-group'>
                        <label style={{marginRight:"15px"}} htmlFor='aid'>A_ID:</label>
                        <input type="text" id='aid' name='aid' onChange={handleChange} value={aid} />
                    </div>
                    <div className='input-group'>
                        <label style={{marginRight:"10px"}} htmlFor="name">Name</label>
                        <input type='text' id='name' name='name' onChange={handleChange} value={name} />
                    </div>
                    {btn===true?<button className='add' id='add' onClick={handleClick}>Add</button>:<button className='update' id='update' onClick={handleUpdate}>Update</button>}
                </div>
                <div className='content-table'>
                    <table>
                        <thead className='table-header'>
                            <tr>
                                <th>Edit</th>
                                <th>Delete</th>
                                <th>A_id</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody className='table-data'>
                            {
                                artists.map((user) => {
                                    return (
                                        <tr key={user.id}>
                                            <td><button onClick={(e) => handleEdit(e, user.id)}>edit</button></td>
                                            <td><button onClick={(e)=>handleDelete(e,user.id)}>delete</button></td>
                                            <td>{user.aid}</td>
                                            <td>{user.name}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Artist