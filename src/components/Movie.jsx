import './movie.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, STATUS } from "../features/movie";
import { actionsh } from "../features/highlightmovie";
import { actionssetCurrentScreen } from "../features/currentscreen";
import { actionsshopcart } from '../features/shoppingcart';
import React from 'react';
import ReactDOM from 'react-dom';

import Search from './Search';



import MovieCard from './MovieCard'


const Movie = () => {

    const status = useSelector(state => state.movie.status);

    const movies = useSelector(state => state.movie.movies);

    const [page, setPage] = useState(1)


    const [content, setContent] = useState(null)


    const dispatch = useDispatch();
    const selectedmovie = useSelector(state => state.highlightmovie.selectedmovie);
    const buy = (film) => {dispatch(actionsshopcart.addToCart(film))};




    useEffect(() => {


        if (status === STATUS.NORMAL) {
            setContent('Redo för några Movies!');
            fetchMovies(dispatch);
        } else if (status === STATUS.FETCHING) {
            setContent('Väntar på Movies...');

        } else if (status === STATUS.SUCCESS) {
            console.log('the movie length: ', movies.length)
            console.log('the movies: ', movies)

            setContent(movies.map(movie =>
                <div>
                    <MovieCard movie={movie} />
                    <div className='moviecardbuttons'>
                        <button className='moreinfobutton' onClick={() => {
                            //setShowmoreinfoforthismovie(movie)
                            fetchSpecificMovie(movie.imdbID);
                        }}>More Info</button>
                        <button className = 'buybutton' onClick={()=>

                        { console.log('test info')
                            buy(movie) }}>Buy</button>
                    </div>
                </div>
            ))
        } else {
            setContent("Kunde inte hämta Movies");

        }
    }, [movies]);

// fill="#ffcc33"
    function StarIcons(props) {
      const { fill = 'none' } = props;
      return (
      <svg className= "w-6 h-6" viewBox="150 0 400 400" fill={fill}
                            xmlns="http://www.w3.org/2000/svg" version="1.1">
                         <polygon stroke="#ffffff" stroke-width="10"
                                   points="350,75  379,161 469,161 397,215
                                           423,301 350,250 277,301 303,215
                                           231,161 321,161" />
                       </svg>
      );
    }

    function RatingIcon(props) {
      const convertThis = Math.floor(props/2);
      const {
        index,
        rating,
        onSaveRating,
      } = convertThis;

      const fill = React.useMemo(() => {
        if (rating >= index) {
          return 'red';
        }
        return 'none';
      }, [rating, index]);
      return (
          <div>
            <StarIcons fill={fill} />
          </div>
      )
    }

    const DisplayingStars = () => {
      const [rating, setRating] = React.useState(0);
      const onSaveRating = (index) => {
        setRating(index);
      };
      return(
        <div className="styleIcons">
          {[1, 2, 3, 4, 5].map((index) => {
            return (
              <RatingIcon
                index={index}
                rating={rating}
                onSaveRating={onSaveRating} />
            )
          })}
        </div>
      );
    }

    function openLightbox(movie) {

        let el = document.querySelector('#overlay img');
        el.setAttribute('src', movie.Poster);
        el.setAttribute('alt', movie.Title);

        const titlesRows = (<h1 className='styleH1txt'>{movie.Title}</h1>);
        const titlesRows1 = (<h3 className='styleH3txt'>{movie.Year}</h3>);
        const titlesRows3 = (<h3 className='styleH3txt'>&nbsp;|&nbsp;{movie.Runtime}</h3>);
        const titlesRows4 = (<h3 className='styleH3txt'>&nbsp;|&nbsp;{movie.Language}</h3>);
        const titlesRows5 = (<h3 className='styleH3txtRate'>{movie.imdbRating}</h3>);
        const titlesRows6 = (<DisplayingStars/>);
        const DisplayingTitles = ({data}) => (<div>{ titlesRows }{ titlesRows1 }{ titlesRows3 }{ titlesRows4 }{ titlesRows5 }{ titlesRows6 }</div>);
        ReactDOM.render(<DisplayingTitles data={ titlesRows, titlesRows1 } />, document.querySelector("#overlay .figcaption"))
        document.querySelector('#overlay').classList.toggle('show');
        document.body.style.overflow = 'hidden';
        var elm = document.querySelector('#overlay');
        if (elm) {
            elm.addEventListener('click', () => {
                document.querySelector('#overlay').classList.remove('show');

                document.body.style.overflow = 'unset';
            });
        }
    }

    async function fetchSpecificMovie(imdbID) {
        dispatch(actionsh.isFetching());
        const url = 'http://www.omdbapi.com/?apikey=72d7fe9&i=' + imdbID
        try {
            let response = await fetch(url);
            let json = await response.json();
            console.log('Got data: ', json);
            let movie = json;
            dispatch(actionsh.success(movie))
            openLightbox(movie);
            RatingIcon(movie.imdbRating);
            console.log('open this movie : ', movie);
            //setcontent(<HighlightedMovie/>)
        } catch {
            dispatch(actionsh.failure());
        }
    }

    return (
        <>
            <div className='moviePageTitle'>
                <p>Our Exciting Movies</p>
            </div>
            <Search placeholder="SearchMovies" ></Search>

             <section id="overlay">
                <div className="figure">
                    <div className="topContainer">
                        <div className="imgDisp">
                            <img src="" alt="" className="imgFormat"/>
                        </div>
                        <div className="sideContainer">
                            <div className="titlesDisp">
                                <div className="figcaption">
                                    <div className="rateInner"><DisplayingStars/></div>
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

            <div className='four-columns'>
                {/*{selectedmoviee}*/}
                {content}
            </div>
            {/*<button className = 'loadMore' onClick={fetchOnePageMore}>LoadMore</button>*/}
        </>
    )

    async function fetchMovies() {
        dispatch(actions.isFetching());
        const url = 'http://www.omdbapi.com/?apikey=72d7fe9&s=taken&page=1'
        try {
            let response = await fetch(url);
            let json = await response.json();
            console.log('Got data: ', json);
            let movies = json.Search;
            movies.map(movie => {
                if(movie.Poster !== 'N/A'){
                    dispatch(actions.success(movie))
                }

            })
            //dispatch(actions.success(movies))
            //let numberofpages = (Math.floor(parseInt(json.totalResults) / 10)) + 1
            /*let numberofpages = (Math.floor(parseInt(json.totalResults) / 10)) + 1*/
            for (var i = 2; i < 6; i++) {
                fetchMoreMovies(i)
            }
            dispatch(actionssetCurrentScreen.setCurrentScreen('movie'))
            console.log('the moviessss : ', movies)
        } catch {
            dispatch(actions.failure());

        }
    }

    async function fetchMoreMovies(i) {
        dispatch(actions.isFetching());
        const url = 'http://www.omdbapi.com/?apikey=72d7fe9&s=taken&page=' + i
        try {
            let response = await fetch(url);
            let json = await response.json();
            console.log('Got data: ', json);
            let movies = json.Search;
            movies.map(movie => {
                if(movie.Poster !== 'N/A'){
                dispatch(actions.success(movie))
                }
            })
            //dispatch(actions.success(movies))
        } catch {
            dispatch(actions.failure());
        }
    }

    /*async function fetchOnePageMore() {
        setPage(page+1)
        if(page<5){
            dispatch(actions.isFetching());
            const url = 'http://www.omdbapi.com/?apikey=72d7fe9&s=taken&page=' + page
            try {
                let response = await fetch(url);
                let json = await response.json();
                console.log('Got data: ', json);
                let movies = json.Search;
                movies.map(movie=>{
                    dispatch(actions.success(movie))
                })
                dispatch(actionssetCurrentScreen.setCurrentScreen('movie'))
            } catch {
                dispatch(actions.failure());
            }
        }

    }*/



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


}

export default Movie;