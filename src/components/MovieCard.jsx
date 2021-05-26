import './movie.css';


const MovieCard = (props) => {

    return (
        <div>
            <img className='poster' src={props.movie.Poster}  alt='abc'></img>
        </div>
    )

};

export default MovieCard;