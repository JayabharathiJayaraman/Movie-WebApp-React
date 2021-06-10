import './movie.css';
import './MovieCard.css';

const MovieCard = (props) => {

    return (
        <div className='poster'>
            <img className='img' src={props.movie.Poster}  alt='abc'/>
            <div class="bottom-right">{props.movie.Price} kr</div>
        </div>
    )

};

export default MovieCard;