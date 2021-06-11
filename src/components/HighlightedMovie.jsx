import './movie.css';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import './HighlightedMovie.css'
import StarsRating from 'stars-rating';
import GetComments from './GetComments';



const HighlightedMovie = ({goBack}) => {

    const selectedmovie = useSelector(state => state.highlightmovie.selectedmovie);
    const ratingChanged = (newRating) => {
        console.log(newRating)
      }
    
    function closelightbox(){
        goBack()
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
       // document.body.style.overflow = 'hidden';
        console.log(selectedmovie.Title)
    }, [selectedmovie]);
   
   
    return (
        
             <section id="overlay">
                <div className="figure">
                    <button id='closebutton' className="styleClose" onClick={()=>{
                            closelightbox();}}>X
                    </button>

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
                                <div className='alignRatings'>
                                    <div>
                                        <h3 className='styleH3txtRate'>{selectedmovie.imdbRating/2}</h3>
                                    </div>
                                    <div className='levelRating'>
                                        <StarsRating  count={5}  onChange={ratingChanged}  size={25}
                                            value={selectedmovie.imdbRating/2}  edit={false}  color2={'#ffcc33'} color1={'#F8F3F1'}/>
                                    </div>
                                </div>
{/*                                     <div className="rateInner"><DisplayingStars/></div> */}
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="bottomContainer clear">
                        <div className="bottomContTitle"><h2>Comments</h2></div>
                        <div className="commentsBody"><GetComments imdb={selectedmovie.imdbID}/></div>
                        <div className="clear"></div>
                    </div>
               </div>
             </section>
    )


}


export default HighlightedMovie;