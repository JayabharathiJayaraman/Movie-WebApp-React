import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actions, STATUS } from "../feutures/movietest"

const MovieTest = () => {
    const status = useSelector(state => state.movie.status)
    const movieList = useSelector(state => state.movie.movie)
    const [searchMovie, setSearchMovie] = useState('minions')
    console.log('movieList', movieList)
    const dispatch = useDispatch()
    let content = null
    let blatext = 'blaText2'
    if (status === STATUS.NORMAL) {
        content = movieList[0].Poster
        blatext = 'normal'
    } else if ( status === STATUS.FETCHING) {
        content = 'Väntar på fakta...'
        blatext = 'fetching'
    } else if ( status === STATUS.SUCCESS) {
        content = movieList[0].Poster
        blatext = movieList[0].key
    } else { 
        content = movieList[0].Poster
        blatext = 'blaText3'
    }
 
    // useEffect(() => {
    //     fetchMovie(dispatch)
    // }, [dispatch])

    const handleChange = event => setSearchMovie(event.target.value);
    return (
        <div>
            <p>
                <input type="text" value={searchMovie} onChange={handleChange}></input>
                <button onClick={() => 
                fetchMovie(dispatch, searchMovie)}>Get movie!</button>                
            </p>
            <h2>{blatext}</h2>
            <img src={content} alt='movie'/>
        </div>
    )
}

async function fetchMovie(dispatch, movie) {
    dispatch(actions.isFetching())
    //const movies = ['smallfoot', 'minions', 'coco', 'soul', 'Ralph Breaks the Internet']
console.log('???', movie)
  
    const url = 'http://omdbapi.com/?apikey=72d7fe9&t=' + movie
   
    try {
        let response = await fetch(url)
        let json = await response.json()
        console.log('Got data: ', json )
        //let img = json.Poster
        //let title = json.Title
        if(json.Response !== "False"){
            dispatch(actions.success(json))
        }
        
    } catch {
        dispatch(actions.failure())
    }
}
export default MovieTest;