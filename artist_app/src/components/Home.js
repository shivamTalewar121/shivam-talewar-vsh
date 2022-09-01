import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {

    const [userId, setUserId]=useState()

    const initialValue = { uid: '', name: '' }

    const [formValue, setFormValue] = useState(initialValue)

    const { uid, name } = formValue

    const [users, setUsers] = useState([])

    const [btn, setBtn]=useState(true)

    const getApi = async () => {
        try {
            let result = await axios.get('http://localhost:3000/users')
            setUsers(result.data)
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
                const result = await axios.post('http://localhost:3000/users', {
                    uid: uid, name: name
                })
                setUsers([...users, result.data])
            } catch (error) {
                console.log(error)
            }
            setFormValue(initialValue)
    }

    useEffect(() => {
        getApi()
    }, [formValue, users])

    const handleEdit = async (event, id) => {
        setBtn(false)
        setUserId(id)
        try {
            const result = await axios.get(`http://localhost:3000/users/${id}`);
            setFormValue({uid: result.data.uid, name: result.data.name})
        } catch (error) {
            console.log(error);
        }
    }

    const handleDelete = async (e, id) => {
        try{
            await axios.delete(`http://localhost:3000/users/${id}`)
        }catch(error){
            console.log(error)
        }
    }

    const handleUpdate = async () =>{
        try{
            await axios.put(`http://localhost:3000/users/${userId}`, {
                uid: uid, name: name
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
                    <h1>Users List</h1>
                    <div className='input-group'>
                        <label htmlFor='uid'>UID</label>
                        <input type="text" id='uid' name='uid' onChange={handleChange} value={uid} />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="name">Name</label>
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
                                <th>Uid</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody className='table-data'>
                            {
                                users.map((user) => {
                                    return (
                                        <tr key={user.id}>
                                            <td><button onClick={(e) => handleEdit(e, user.id)}>edit</button></td>
                                            <td><button onClick={(e)=>handleDelete(e,user.id)}>delete</button></td>
                                            <td>{user.uid}</td>
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

export default Home