/* import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { ratePost } from "../../actions/posts";
import { useDispatch } from "react-redux";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};



const Lon = ({ post }) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [rating, setRating] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  
  const dispatch = useDispatch();
  const [rates, setRates] = useState(post?.rates);
  const star = Array(5).fill(0)

  const handleClick = value => {
    setRating(value)
  };

   const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
  
  const getLabelText = (rating) => {
    return `${rating} Star${rating!== 1 ? 's' : ''}, ${labels[rating]}`;
  }

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue)
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  };

  const handleSubmit = async(e) => {
 e.preventDefault();
    const newRate =  await dispatch(ratePost(`${user?.result?.username}: ${rating}`, post._id));
    setRates(newRate); 
    
  };

  const Sta = () => {
    if (rates.length > 0) 
      return rates.find((rates) => rates) 
  };



return (
    <div style={styles.container}>
        <form onSubmit={handleSubmit}>
      <h2> React Ratings </h2>
      <div style={styles.stars}>
        {star.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              getLabelText={getLabelText}
              onClick={() => handleClick(index + 1)}
              onMouseEnter={() => handleMouseOver(index + 1) && getLabelText()}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || rating) > index ? colors.orange : colors.grey}
              style={{
                marginRight: 10,
                cursor: "pointer"
              }}
              
            />
          
          )
        })}
      </div>
      <Sta />
      <button type="submit">
        post rating
      </button>
      </form>
    </div>
  );
};


const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 10,
    margin: "20px 0",
    minHeight: 100,
    width: 300
  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
  }

};




export default Lon;  */