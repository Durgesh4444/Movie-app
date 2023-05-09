import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { APIKEY } from './Header';


const MovieInfo = (props) => {
  const [movieInfo, setMoviInfo]=useState();
  const selectmovie = props.selectMovie;
  useEffect(()=>{
    axios.get(`https://www.omdbapi.com/?i=${selectmovie}&apikey=${APIKEY}`).then((response)=>setMoviInfo(response.data))
  }, [selectmovie])

  return (
    <div className='focus'>
      <img src={movieInfo?.Poster} alt="" />
      <div className="moreinfo">
        
        <h4>Movie : {movieInfo?.Title}</h4>
        <h4>IMDB Rating : {movieInfo?.imdbRating}</h4>
        <h4>Year: {movieInfo?.Year}</h4>

        <h4>Language: {movieInfo?.Language} </h4>
        <h4>Rated: {movieInfo?.Rated}</h4>
        <h4>Released:{movieInfo?.Released}</h4>
        <h4>Runtime: {movieInfo?.Runtime}</h4>
        <h4>Genre: {movieInfo?.Genre}</h4>
        <h4>Director:{movieInfo?.Director}</h4>
        <h4>Actors: {movieInfo?.Actors}</h4>
        <h4>
Plot: {movieInfo?.Plot}
</h4>
          






      </div>
      <div className='cross' onClick={() => props.updateMovie()}>X</div>
    </div>
  )
}

export default MovieInfo