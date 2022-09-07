import React, {useState} from 'react'
import { FaStar } from 'react-icons/fa'

const Cards = ({ data }) => {

    const [rating, setRating] = useState(null)

    const [hover, setHover] = useState(null)

    const handleClick = (event, id, ratingValue)=>{
        setRating(ratingValue)
        
        console.log(id, ratingValue)
    }

    return (
        <div className="card" key={data.id}>
            <img src={data.url} className="card-img-top" alt="!#" style={{height: '150px', width:'150px', objectFit:'cover'}} />
            <div className="card-body m-0 p-0">
                <h5 className='card-title' style={{width: "100%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>{data.name}</h5>
                <p className='card-text'>{[...Array(5)].map((star, idx)=>{
                    const ratingValue = idx+1
                    return(
                        <label key={idx}>
                            <input type='radio' name='rating' value={ratingValue} onClick={(e) => handleClick(e,data.id,ratingValue)} />
                            <FaStar size={20} cursor="pointer" color={ratingValue <= (hover || rating) ? "yellow" : "grey"}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                            />
                        </label>
                    )
                })}</p>
            </div>
        </div>
    )
}

export default Cards; 
