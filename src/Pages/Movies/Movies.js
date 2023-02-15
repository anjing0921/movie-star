import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import GenreButton from "../../components/GenreButton"

import CustomPagination from "../../components/Pagination/CustomPagination";

const Movies = () => {
  const [parentGenres, setParentGenres] = useState([]);
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  //const [numOfPages, setNumOfPages] = useState();
  const getChildGenres = () => {
    setParentGenres();
    console.log(parentGenres)

  }

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&&sort_by=popularity.desc&page=1&vote_average.gte=8.5&include_adult=false`
    );
    setContent(data.results);
    console.log(data.results)
    console.log(data.results[0].id)
    console.log(data.results.title)
    //setNumOfPages(data.total_pages);
  };
    useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    
  }, [parentGenres, page]);

  return (
    <>
    
    <span className='pageTitle'>Classic Movies</span>
  
    <div className="trending">
        {content &&
          content.map((c) => (
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
    </>
  )
}

export default Movies