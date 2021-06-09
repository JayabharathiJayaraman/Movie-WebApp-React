import db from '../features/firebase';
import { useEffect, useState } from "react";

const GetComments = (props) =>  {

    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(false)
    
    const ref = db.collection("ratings")
    
    function getComments(props) {
        setLoading(true)
        ref.onSnapshot((querySnapshot) => {
            const items = []
            querySnapshot.forEach((doc) => {
                if(props.imdb == doc.data().imdbID){
                    items.push(doc.data())
                }
            })
            setComments(items)
            setLoading(false)
        })
    }
    
    useEffect(()=>{
        getComments(props)
    }, [])

    if (loading) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
        {comments.map((comment)=>(
            <div>{comment.usercomment}</div>
        ))}
        </div>
    )

};

export default GetComments;