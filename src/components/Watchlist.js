import React, { useContext } from 'react'
import MovieCard from './MovieCard'
import FetchContext from '../store/fetch-context'

const Watchlist = () => {
  const fetchCtx = useContext(FetchContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div >
          <span className="pageTitle">Watch list</span>
        </div>

        <div className="movie-grid">
            {fetchCtx.watchlist.map((movie) => (
              <MovieCard movie={movie} key={movie.id}  />
            ))}
        </div>
        
      </div>
    </div>
  );
};

export default Watchlist
