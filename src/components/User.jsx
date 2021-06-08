import './movie.css';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import StarsRating from 'stars-rating';

import MovieCard from './MovieCard';
import { actionsLogin } from "../features/login";

import HighlightedMovie from './HighlightedMovie';
import db from '../features/firebase';


<link rel="stylesheet" href="node_modules/react-star-rating/dist/css/react-star-rating.min.css"></link>


const User = () => {

    
    const [content, setContent] = useState(null)
    const [movierating, setMovierating] = useState(4.3)
    
    const [moviecomment, setMoviecomment] = useState('abc')
    const currentloginuser = useSelector(state => state.login.currentuser);
    const currentusershppinghistory = useSelector(state => state.shoppinghistory.currentusershoppinghistory);
    const ratingChanged = (newRating) => {
        console.log(newRating)
        setMovierating(newRating)
        console.log('movierating: ', movierating)
      }
    
    useEffect(() => {
        console.log('movierating first: ', movierating)
        console.log('this is my returned data from reducer', currentusershppinghistory)
        /*setContent(currentusershppinghistory.map(checkout =>
            <div>
                <MovieCard movie={checkout.movie} />
                Rating:  
                <StarsRating  count={5}  onChange={ratingChanged}  size={36}  value={5}  edit={true}  color2={'#51E706'} color1={'#F8F3F1'} />
                comment:
                <input ref={setMoviecomment}  type="text" onChange={leaveacomment}/>
                <button onClick={()=>{
                shoot(checkout.movie.imdbID)
                }} >Send Rating!</button>
            </div>
        ))*/
    }, []);

    function leaveacomment(val) {
        console.warn(val.target.value);
        setMoviecomment(val.target.value);
        
    }


    function shoot(imdbID,mr) {
        console.log('movieratingssss: ', mr)
        console.log('moviecomment: ', moviecomment)
        console.log('imdbID: ', imdbID)
        saveuserratingtodb(imdbID,movierating,moviecomment)
        alert("Thank you for your rating !!");
      }
      const saveuserratingtodb=async(imdbID,mr,mc)=>{
        db.collection("ratings").doc().set({
            imdbID: imdbID,
            movierating: mr,
            usercomment: mc,
            uid: currentloginuser.uid
        })
        .then(function() {
            
            
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }
   

    

    return (
        <>
          
           
          <div className='four-columns'>
                
                
                {
                currentusershppinghistory.map(checkout =>
            <div>
                <MovieCard movie={checkout.movie} />
                Rating:  
                <StarsRating  count={5}  onChange={ratingChanged}  size={36}  value={movierating}  edit={true}  color2={'#51E706'} color1={'#F8F3F1'} />
                comment:
                <input ref={setMoviecomment}  type="text" onChange={leaveacomment}/>
                <button onClick={()=>{
                shoot(checkout.movie.imdbID,movierating)
                }} >Send Rating!</button>
            </div>
        )
        }
            </div>
        </>
    )

    

    

    

}

export default User;