import React from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import { useEffect, useState} from "react";
import axios from "axios";

const Movies = () => {
  const [moviesContent, setMoviesContent] = useState([]);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&&sort_by=popularity.desc&page=1&vote_average.gte=8.5&include_adult=false`
    );
    console.log('Movies', data.results);
    setMoviesContent(data.results);
  };
  
  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
  }, []);

  return (
    <div>   
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
            />
          ))}
      </div>
    </div>
  )
}

export default Movies