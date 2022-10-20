/* import { React,useRef, useState } from "react";
import Star from "@mui/icons-material/Star";
//import { Popup } from 'react-map-gl';
import { useDispatch } from "react-redux";
//import useStyles from "./styles";
import { ratePost } from "../../actions/posts";
import Typography  from "@mui/material/Typography */

/* const Js = ({ post })  => {

const user = JSON.parse(localStorage.getItem('profile'));
  
  const [star, setStar] = useState(0);
  const dispatch = useDispatch();
  const [rates, setRates] = useState(post?.rates);
  //const ratesRef = useRef();
  //const { classes } = useStyles;
  

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newRates =  await dispatch(ratePost(`${user?.result?.username}: ${star}`, post._id));

    setStar(0);
    setRates(newRates);

   // ratesRef.current.scrollIntoView({ behavior: 'smooth' });
  };

return (
 
    <div style={{ height: "100vh", width: "100%" }}>
    
                <Typography gutterBottom variant="h8">Reviews</Typography>
                
                {rates?.map((c, i) => (
                
                return
                (  <Typography key={i}  gutterBottom variant="subtitle1">
                {Array(c.rating).fill(<Star />)} 
              
                <strong>{c.split(': ')[0]}</strong>
                {c.split(':')[5]}
                
                </Typography>
                )
      
                  ))}
          
        

          {
          <>
           <div>
            
                <form onSubmit={handleSubmit}>
                  <label>Rating</label>
                  <select onChange={(e) => setStar(e.target.value)}>
                  
                    <option value={numberofStars}>1</option>
                    <option value={numberofStars}>2</option>
                    <option value={numberofStars}>3</option>
                    <option value={numberofStars}>4</option>
                    <option value={numberofStars}>5</option>
                  </select>
                <button type="submit" >
                    post rating
                  </button>
                </form>
                
              </div>
          </>
        }
    </div>
  );
}

export default Js; */

import React, {useState, useRef} from 'react';
import { FaStar } from 'react-icons/fa';
import { ratePost } from "../../actions/posts";
import { useDispatch } from "react-redux";


const Rating = ({ post }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const dispatch = useDispatch();
  const [star, setStar] = useState(post?.star);
  const starRef = useRef();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newStar =  await dispatch(ratePost(`${user?.result?.username}: ${rating}`, post._id));
    
    setStar(newStar);
    starRef.current.scrollIntoView({ behavior: 'smooth' });
  
  };

  return (
    <div>
      <form onSubmit={handleSubmit} >
      <label>Ratings</label>
      {[...Array(5)].map((star, i)=>{
         const ratingValue = i + 1;
         return (
          <label>
            <input 
            type="radio" 
            name="rating" 
            value={ratingValue} 
            onClick={() => setRating(ratingValue)} 
        
            />
            <FaStar color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
            size={20}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
   />
          </label>
         )
      })}
      <button type="submit">
        post rating
      </button>
      </form>
    </div>
  )
};

export default Rating;