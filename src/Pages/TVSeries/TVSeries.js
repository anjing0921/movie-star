import React from "react";
import { useEffect, useState} from "react";
import axios from "axios";
import Genres from "../../components/Genre";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";

const TVSeries = () => {
  const [seriesContent, setSeriesContent] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [page, setPage] = useState(1);

  const getGenreIds = (selectedGenres) => {
    if (selectedGenres.length < 1) return "";
    const GenreIds = selectedGenres.map((g) => g.id); //Array contains GenreIds
    return GenreIds.reduce((acc, curr) => acc + "," + curr); //Change from Arry to String 
};

const genreforURL = getGenreIds(selectedGenres)

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&page=${page}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${genreforURL}`
      );
    setSeriesContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    // eslint-disable-next-line
  }, [genreforURL, page]);

  return (
    <div>   
    <span className='pageTitle'>Classic Movies</span>
    <Genres
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
    />
    <div className="trending">
        {seriesContent.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="tv"
              vote_average={c.vote_average}
              genre_ids={c.genre_ids}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  )
}

export default TVSeries