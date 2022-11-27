import React from 'react';
import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';

const Rating = () => {
    const [star, setStar] = useState(0);
    const [rates, setRates] = useState(post?.comments);

    const handleRateSubmit = (e) => {
        e.preventDefault();
        const newRate = {
            rating: star
        }

    };
  return (
    <div>
        {
             
        }
        
        <form onSubmit={handleRateSubmit}>
        <label>Rating</label>
         <select onChange={(e) => setStar(e.target.value)}>
           <option value="1">1</option>
           <option value="2">2</option>
           <option value="3">3</option>
           <option value="4">4</option>
           <option value="5">5</option>
         </select>
         <button type="submit" className="submitButton">
          Add rating
        </button>
       </form>
    </div>
  )
}

export default Rating