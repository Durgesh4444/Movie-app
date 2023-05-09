import React, { useState } from 'react'
import logo from './pngwing.com.png'
import axios from 'axios';
import MovieComponent from './MovieComponent';
import MovieInfo from './MovieInfo';
const img = logo;
export const APIKEY ="a47b3bf5"

const Header = () => {
    const [search, setSearch] = useState() ///1
    const [timeoutID, updateTimeOutId]= useState()   ////3

    const [movielist, updateMovielist]=useState() ////9

    const [selectMovie, updateMovie]=useState() /////10 for movieinfo

    const fetchData = async(searchstring)=>{   ///7
       const response =await axios.get(`https://www.omdbapi.com/?s=${searchstring}&apikey=${APIKEY}`)
       console.log(response);
       updateMovielist(response.data.Search)
    }

    

    const ontextchange = (e) =>{   ///2 
        clearTimeout(timeoutID)                                                     //very important 6
        setSearch(e.target.value)
        const timeout = setTimeout(() =>fetchData(e.target.value), 1000)        //very important 4 ////fetchdeta 8
        updateTimeOutId(timeout)                                                    //very important 5
        
    }
  return (
    <div>
        <div className='navbar'>
            <div className='logobox'>
            <img className='logo' src={img} alt="logo" />
            <h1>Movie App</h1>
            </div>
            
            <input type="search" placeholder='Enter Movie Name ' onChange={ontextchange} value={search}/>
        </div>
        <h1 className='heading'>Search Your Favoriut Movies </h1>
        {selectMovie && <MovieInfo selectMovie={selectMovie} updateMovie={updateMovie}/>}
        <div className='movie-container'>
            {
                movielist?.length ? movielist.map((movie, index)=><MovieComponent key={index} movie={movie} updateMovie={updateMovie}/>) : <h1 className='error'>Not Found</h1>
            }
        
      </div>
    </div>
  )
}

export default Header