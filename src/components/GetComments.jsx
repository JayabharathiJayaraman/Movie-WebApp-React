import db from '../features/firebase';
import StarsRating from 'stars-rating';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const GetComments = () =>  {


    const selectedmovie = useSelector(state => state.highlightmovie.selectedmovie);
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(false)
    
    const ref = db.collection("ratings")
    
    function getComments() {
        setLoading(true)
        ref.onSnapshot((querySnapshot) => {
            const items = []
            querySnapshot.forEach((doc) => {
                if(selectedmovie.imdbID == doc.data().imdbID){
                    items.push(doc.data())
                    console.log('comment data', doc.data())
                }
            })
            setComments(items)
            setLoading(false)
        })
    }
    
    useEffect(()=>{
        getComments()
    }, [selectedmovie])

    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
        {comments.map((comment)=>(
            <div className='comment'>
            Comment:
                <div className='commentRating'> 
                    <StarsRating  count={5}   size={25} 
                        value= {4} edit={false} 
                        color2={'#ffcc33'} color1={'#F8F3F1'}/>
                </div>
            <h3 >{comment.usercomment}</h3>
           Rating: {comment.movierating}
            </div>
        ))}
       
        </div>
    )

};

export default GetComments;