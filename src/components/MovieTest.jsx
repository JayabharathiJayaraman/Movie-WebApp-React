import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { actions, STATUS } from "../feutures/movietest"

const MovieTest = () => {
    const status = useSelector(state => state.fact.status)
    const img = useSelector(state => state.fact.img)
    const [searchMovie, setSearchMovie] = useState('minions')

    const dispatch = useDispatch()
    let content = null
    let blatext = 'blaText'
    if (status === STATUS.NORMAL) {
        content = 'redo för lite fakta'
        blatext = 'normal'
    } else if ( status === STATUS.FETCHING) {
        content = 'Väntar på fakta...'
        blatext = 'fetching'
    } else if ( status === STATUS.SUCCESS) {
        content = img
        blatext = 'success'
    } else { 
        content = 'Kunde inte hämta fakta'
        blatext = 'blaText'
    }
 
    useEffect(() => {
        fetchFact(dispatch)
    }, [dispatch])

    const handleChange = event => setSearchMovie(event.target.value);
    return (
        <div>
            <p>
                <input type="text" value={searchMovie} onChange={handleChange}></input>
                <button onClick={() => 
                fetchFact(dispatch, searchMovie)}>Get movie!</button>                
            </p>
            <h2>{blatext}</h2>
            <img src={content}/>
        </div>
    )
}

async function fetchFact(dispatch, movie) {
    dispatch(actions.isFetching())
    //const movies = ['smallfoot', 'minions', 'coco', 'soul', 'Ralph Breaks the Internet']

    const url = 'http://omdbapi.com/?apikey=72d7fe9&t=' + movie
   
    try {
        let response = await fetch(url)
        let json = await response.json()
        console.log('Got data: ', json )
        let img = json.Poster
        let title = json.Title
        dispatch(actions.success(img, title))
    } catch {
        dispatch(actions.failure())
    }
}
export default MovieTest;