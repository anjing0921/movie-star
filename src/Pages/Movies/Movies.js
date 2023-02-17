import React from "react";
import SingleContent from "../../components/SingleContent/SingleContent";


const Movies = ({moviesContent,setWatchList,watchlist}) => {

  return (
    <>
    
    <span className='pageTitle'>Classic Movies</span>
  
    <div className="trending">
        {moviesContent.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="movie"
              vote_average={c.vote_average}
              setWatchList={setWatchList}
              watchlist={watchlist}
            />
          ))}
      </div>
    </>
  )
}

export default Movies