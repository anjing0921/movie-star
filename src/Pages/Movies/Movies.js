import React from "react";
import { useEffect, useState} from "react";
import axios from "axios";
import Genres from "../../components/Genre";
import SingleContent from "../../components/SingleContent/SingleContent";

const Movies = () => {
  const [moviesContent, setMoviesContent] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const getGenreIds = (selectedGenres) => {
    if (selectedGenres.length < 1) return "";
    const GenreIds = selectedGenres.map((g) => g.id); //Array contains GenreIds
    return GenreIds.reduce((acc, curr) => acc + "," + curr); //Change from Arry to String 
};

const genreforURL = getGenreIds(selectedGenres)

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${genreforURL}`
    );
    setMoviesContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    // eslint-disable-next-line
  }, [genreforURL]);

  return (
    <div>   
    <span className='pageTitle'>Classic Movies</span>
    <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
    />
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