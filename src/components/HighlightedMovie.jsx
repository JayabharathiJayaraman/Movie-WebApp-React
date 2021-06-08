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

function Comment({ comment }) {
      return (
        <div
          key={comment.id}
          className={comment.responseTo ? "comment comment--reply" : "comment"}
        >
          <a href={`/user/${comment.writer}`}>{comment.writer}</a>
          <p>{comment.content}</p>
          {comment.responses &&
            comment.responses.map((reply) => (
              <Comment key={reply.id} comment={reply} />
            ))}
        </div>
      );
    }

    function getThreadedComments(data) {
      const comments = [];

      for (let comment of data) {
        if (comment.responseTo) {
          const index = comments.findIndex((i) => i.id === comment.responseTo);
          comments[index].responses.push(comment);
        } else {
          comments.push({ ...comment, responses: [] });
        }
      }
      return comments;
    }

    function DisplayThisList() {
      const data = [
        {
          id: 1,
          content: "comment 1",
          responseTo: null,
          writer: "Max"
        },
        {
          id: 2,
          content: "comment #2, in response to Max",
          responseTo: 1,
          writer: "John"
        },
        {
          id: 3,
          content: "Max, that's great!",
          responseTo: 1,
          writer: "Peter"
        },
        {
          id: 4,
          content: "Okay, it's really impressive ;)",
          responseTo: 1,
          writer: "Vic"
        },
        {
          id: 5,
          content: "Great content!",
          responseTo: null,
          writer: "Lilly"
        },
        {
          id: 6,
          content: "comment 3",
          responseTo: null,
          writer: "Karl"
        },
        {
          id: 7,
          content: "Oi, Karl! This is comment 7",
          responseTo: 6,
          writer: "Tina"
        },
        {
          id: 8,
          content: "@Karl, just do not...",
          responseTo: 6,
          writer: "Chris"
        }
      ];
      const comments = getThreadedComments(data);

      return (
        <div className="DisplayThisList">
        {/*           <h2>Comments</h2> */}
                  {comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                  ))}
                </div>
              );
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
                                <div className='alignRatings'>
                                    <div>
                                        <h3 className='styleH3txtRate'>{selectedmovie.imdbRating}</h3>
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
                        <div className="commentsBody"><DisplayThisList/></div>
                        <div className="clear"></div>
                    </div>
               </div>
             </section>
    )


}


export default HighlightedMovie;