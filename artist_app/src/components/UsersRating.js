import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getUsers} from '../redux/actions/userActions'
import Cards from './Cards'

const UsersRating = () => {

  let dispatch = useDispatch()

  let [appUrl, setAppUrl] = useState([])

  let [userData, setUserData] = useState([])

  let [optionId, setOptionId] = useState(null)
  
  const getAlbums =async ()=>{
    try{
      let result = await axios.get(`http://localhost:3000/user-rating`)
      setAppUrl(result.data)
  }
    catch(error){
      console.log(error)
    }
  }

  const handleSelect = async (event) =>{
    setOptionId(event.target.value)
    try{
      let result = await axios.get(`http://localhost:3000/user-rating/${event.target.value}`)
      setUserData(result.data)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    if(optionId===null){
      getAlbums()
    } else{

    }
  }, [])

  return (
    <div>
      <select onChange={handleSelect} name="fruits" id="fruit-select">
        <option defaultValue='select-a-user'>select a user</option>
                {appUrl.map((option, index) => (
                    <option key={index} value={option.id}>
                        {option.name}
                    </option>
                ))}
      </select>
      <div className='user-ratings-page d-flex justify-content-center' style={{marginTop:"10px"}}>
        <div className='row'>
          {
            appUrl.map((d) => {
              return d.albums.map((data)=>{
                return (
                  <div className='col-12 col-lg-3' key={data.id}>
                    <Cards data={data} />
                  </div>
                  )})
              })
            }
        </div>
      </div>
    </div>
  )
}

export default UsersRating