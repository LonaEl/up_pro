import { React,useRef, useState } from "react";
import Star from "@mui/icons-material/Star";
import Room from "@mui/icons-material/Room";
import { Popup } from 'react-map-gl';
import { useDispatch } from "react-redux";
//import useStyles from "./styles";
import { ratePost } from "../../actions/posts";
import Typography  from "@mui/material/Typography";

const Js = ({ post })  => {

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
    
        
          
            <div >
                <Typography gutterBottom variant="h8">Reviews</Typography>
                <Popup>
                {rates?.map((c, i) => (
                   <Typography key={i}  gutterBottom variant="subtitle1">
                    {Array(c.rating).fill(<Star />)} 
                    
                    <strong>{c.split(': ')[0]}</strong>
                    {c.split(':')[1]}
                    </Typography>
                  ))}
          </Popup>
          </div>

          {
          <>
           <div>
            <Popup>
                <form onSubmit={handleSubmit}>
                  <label>Rating</label>
                  <select onChange={(e) => setStar(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                <button type="submit" >
                    post rating
                  </button>
                </form>
                </Popup>
              </div>
          </>
        }
    </div>
  );
}

export default Js;