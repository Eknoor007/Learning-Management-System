import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import '/App.css'

export default function StarRating() {
    const [rating, setrating] = useState(0)
    const [hover, sethover] = useState(null)
    return (
        <>
            <div>
                {[...Array(5)].map((star, index) => {
                    const currentRating = index+1;
                    return (
                        <label>
                            <input type="radio" name='rating' value={currentRating} onClick={() => setrating(currentRating)}/>
                            <FaStar 
                            className='star' 
                            size={20} 
                            color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            onMouseEnter={() => sethover(currentRating)}
                            onMouseLeave={() => sethover(null)} />
                        </label>
                    )
                })}
                <p>You rated this course {rating} stars</p>
            </div>
        </>
    )
}
