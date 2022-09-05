import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, delUsers, editUser, getUsers, updateUser} from '../redux/actions/userActions';
import axios from 'axios';

const Home = () => {
    let initialValue = {name: ""}

    const dispatch = useDispatch()

    const [userId, setUserId] = useState()

    const [formValue, setFormValue] = useState(initialValue)

    const [btn, setBtn] = useState(true)

    let userData = useSelector((state)=>state.UserReducer.userList)

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormValue({ ...formValue, [name]: value })
    }

    const handleClick = (event, uid, name) => {
        event.preventDefault()
        dispatch(addUser(uid,name))
        setFormValue({uid:'', name:''})
    }

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    const handleEdit = async (event, id) => {
        dispatch(editUser(id, setFormValue, setBtn, setUserId))
    }

    const handleDelete = async (e, id) => {
        dispatch(delUsers(id))
    }

    const handleUpdate = async () => {
        dispatch(updateUser(userId,formValue.name, setBtn, setFormValue))
    }

    return (
        <div className='container-fluid'>
            <div className='user-input'>
                <h3 className='text-center'>User</h3>
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
                        <th>UID</th>
                        <th>NAME</th>
                        <th>EDIT</th>
                        <th>DELETE</th>
                    </tr>
                    </thead>
                    <tbody className='table-primary'>
                    {
                                userData.map((user) => {
                                    return (
                                        <tr key={user.id}>
                                            <td>u{user.id}</td>
                                            <td>{user.name}</td>
                                            <td><button className='btn btn-warning' onClick={(e) => handleEdit(e, user.id)}>edit</button></td>
                                            <td><button className='btn btn-danger' onClick={(e) => handleDelete(e, user.id)}>delete</button></td>
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
export default Home