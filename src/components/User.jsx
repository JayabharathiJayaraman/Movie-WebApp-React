import './movie.css';
import { useEffect, useState } from "react";
import {useDispatch, useSelector } from "react-redux";

import StarsRating from 'stars-rating';

import MovieCard from './MovieCard';
import { actionsLogin } from "../features/login";

import HighlightedMovie from './HighlightedMovie';
import db from '../features/firebase';
import { actionsshoppinghistory } from "../features/usershoppinghistory";

<link rel="stylesheet" href="node_modules/react-star-rating/dist/css/react-star-rating.min.css"></link>


const User = () => {

    const dispatch = useDispatch();
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

    const getUserShoppingHistoryfromDB=async()=>{
        dispatch(actionsshoppinghistory.resetusershoppinghistory())
        const response=db.collection('checkout');
        const data=await response.get();
        data.docs.forEach(item=>{
         //setBlogs([...blogs,item.data()])
         console.log('this is my returned data from db', item.data())
         if(item.data().uid===currentloginuser.uid){
            dispatch(actionsshoppinghistory.addtousershoppinghistory(item.data().orders))
         }
        })
    }
   
    useEffect(() => {
        getUserShoppingHistoryfromDB()
    
    

    console.log('currentusershppinghistory: ',currentusershppinghistory)
}, []);

useEffect(() => {
    getUserShoppingHistoryfromDB()



console.log('currentusershppinghistory: ',currentusershppinghistory)
}, []);
    

    return (
        <>
          
          
          <div className='four-columns'>
                
                
                {
                   
                currentusershppinghistory.map(orders=>orders.map(order=>
            <div>
                <MovieCard movie={order.movie} />
                Rating:  
                <StarsRating  count={5}  onChange={ratingChanged}  size={36}  value={movierating}  edit={true}  color2={'#51E706'} color1={'#F8F3F1'} />
                comment:
                <input ref={setMoviecomment}  type="text" onChange={leaveacomment}/>
                <button onClick={()=>{
                shoot(order.movie.imdbID,movierating)
                }} >Send!</button>
            </div>
        ))
             }
            </div>
        </>
    )

    

    

    

}

export default User;