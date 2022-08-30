import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {

    let [users, setUsers] = useState()

    const getApi = async ()=>{
        try{
            let result = await axios.get('http://localhost:3000/users')
            setUsers(result.data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getApi()
    },[])


return (
    <div className='main-page'>
        <div className='main-page__content'>
            <div className='content-input'>
                <h1>Users List</h1>
                <div className='input-group'>
                    <lable htmFor='uid'>UID</lable>
                    <input type="text" id='uid'/>
                </div>
                <div className='input-group'>
                    <lable htmlFor="name">Name</lable>
                    <input type='text' id='name'/>
                </div>
                <button className='add'>Add</button>
            </div>
            <div className='content-table'>
                <table>
                    <tr className='table-header'>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>Uid</th>
                        <th>Name</th>
                    </tr>
                    <tr className='table-data'>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                        <td>hello</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
)
}

export default Home