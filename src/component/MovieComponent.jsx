import React from 'react'

const MovieComponent = (props) => {
  const m = props.movie
  console.log(m);

  
  return (
    <div className='moviecard' onClick={()=>props.updateMovie(m.imdbID)}>
      <img className='movieimg' src={m.Poster === "N/A" ? m.Poster="https://tse1.mm.bing.net/th?id=OIP.b-a-WSAWX1UFG9xGID4aswHaHa&pid=Api&P=0" : m.Poster} alt="" />
      <h3 className='tittle'>The Avengers: Earth's Mightiest Heroes</h3>
      <div className='info'>
        <h5>Year : 2020</h5>
        <h5>Type : Movie</h5>
      </div>
      
    </div>
  )
}

export default MovieComponent