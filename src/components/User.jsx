import './movie.css';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import StarsRating from 'stars-rating';

import MovieCard from './MovieCard';
import { actionsLogin } from "../features/login";

import HighlightedMovie from './HighlightedMovie';


<link rel="stylesheet" href="node_modules/react-star-rating/dist/css/react-star-rating.min.css"></link>


const User = () => {

    
    const [content, setContent] = useState(null)
    const currentloginuser = useSelector(state => state.login.currentuser);
    const currentusershppinghistory = useSelector(state => state.shoppinghistory.currentusershoppinghistory);
    const ratingChanged = (newRating) => {
        console.log(newRating)
      }
    useEffect(() => {

        console.log('this is my returned data from reducer', currentusershppinghistory)
        setContent(currentusershppinghistory.map(checkout =>
            <div>
                <MovieCard movie={checkout.movie} />
                Rating:  
                <StarsRating  count={5}  onChange={ratingChanged}  size={36}  value={5}  edit={true}  color2={'#51E706'} color1={'#F8F3F1'} />
                comment:
                <input    type="text" />
                <button onClick={shoot}>Send Rating!</button>
            </div>
        ))
    }, []);


    function shoot() {
        alert("Thank you for your rating !!");
      }
   

    

    return (
        <>
          
           
          <div className='four-columns'>
                
                {content}
            </div>
        </>
    )

    

    

    

}

export default User;