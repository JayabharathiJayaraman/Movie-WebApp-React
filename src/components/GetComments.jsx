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
            <h3 >{comment.usercomment}</h3>
            <div className='stars'>
            <StarsRating  count={5}    size={26}  value={comment.movierating}  edit={false}  color2={'#51E706'} color1={'#F8F3F1'} />
            </div>
            
           {/* Rating: {comment.movierating} */}
            </div>
        ))}
       
        </div>
    )

};

export default GetComments;