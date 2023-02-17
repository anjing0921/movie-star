import React from 'react'
import MovieControl from './MovieControl'


const MovieCard = ({movie}) => {
  
  return (
    <>
    <div className="movie-card">
      <div className="overlay"></div>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster}`}
        alt={`${movie.title} Poster`}
      />
      <MovieControl movie={movie}/>
    </div>
    </>
  )
}

export default MovieCard