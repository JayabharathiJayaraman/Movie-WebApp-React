import './movie.css';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import './HighlightedMovie.css'
import StarsRating from 'stars-rating';





const HighlightedMovie = () => {

    const selectedmovie = useSelector(state => state.highlightmovie.selectedmovie);
    const ratingChanged = (newRating) => {
        console.log(newRating)
      }
    
    function closelightbox(){
        var elm = document.querySelector('#overlay #closebutton');
        if (elm) {
            elm.addEventListener('click', () => {
                document.querySelector('#overlay').classList.remove('show');

            });
        }
    }

    useEffect(() => {
        
        document.querySelector('#overlay').classList.add('show');
        console.log(selectedmovie.Title)
    }, [selectedmovie]);
   
   
    return (
        
            <section id="overlay">
                <figure>
                    <button id='closebutton' onClick={()=>{
                        closelightbox();
                    }}>X</button>
                    
                    
                    <img src={selectedmovie.Poster} alt={selectedmovie.Title} />
                    <figcaption>
                    Title:  {selectedmovie.Title}<br/>
                    Year: {selectedmovie.Year}<br/>
                    Time: {selectedmovie.Runtime}<br/>
                    Language: {selectedmovie.Language}<br/>
                    Ratings: 
                    <StarsRating  count={5}  onChange={ratingChanged}  size={20}  value={selectedmovie.imdbRating/2}  edit={false}  color2={'#51E706'} color1={'#F8F3F1'} />
                    </figcaption>
                    
                     <div id='movierating'>
                         {/*<StarsRating  count={5}  onChange={ratingChanged}  size={24}  value={4.7}  edit={false}  color2={'#51E706'} color1={'#F8F3F1'} />*/}
                     </div>
                </figure>
            </section>
        
    )


}


export default HighlightedMovie;