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
                document.body.style.overflow = 'unset';
            });
        }
    }

    useEffect(() => {
        document.querySelector('#overlay').classList.add('show');
        document.body.style.overflow = 'hidden';
        console.log(selectedmovie.Title)
    }, [selectedmovie]);
   
   
    return (
        
             <section id="overlay">
                <div className="figure">
                    <div className="topContainer">
                        <div className="imgDisp">
                            <img src={selectedmovie.Poster} alt={selectedmovie.Title}/>
                        </div>
                        <div className="sideContainer">
                            <div className="titlesDisp">
                                <div className="figcaption">
                                <h1 className='styleH1txt'>{selectedmovie.Title}</h1><br/>
                                <h3 className='styleH3txt'>{selectedmovie.Year}</h3>
                                <h3 className='styleH3txt'>&nbsp;|&nbsp;{selectedmovie.Runtime}</h3>
                                <h3 className='styleH3txt'>&nbsp;|&nbsp;{selectedmovie.Language}</h3><br/>
                                Ratings:
                                <StarsRating  count={5}  onChange={ratingChanged}  size={20}
                                    value={selectedmovie.imdbRating/2}  edit={false}  color2={'#51E706'} color1={'#F8F3F1'}/>



{/*                                     <div className="rateInner"><DisplayingStars/></div> */}
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="bottomContainer clear">
                        <div className="bottomContTitle"><h2>Comments</h2></div>
{/*                         <div className="commentsBody"><DisplayThisList/></div> */}
                        <div className="clear"></div>
                    </div>
               </div>
             </section>
    )


}


export default HighlightedMovie;