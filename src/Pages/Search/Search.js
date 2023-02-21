import React from 'react'
import './Search.css'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import SingleContent from '../../components/SingleContent/SingleContent';

const Search = () => {
  const [type, setType] = useState("movie");
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  //const [numOfPages, setNumOfPages] = useState();

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      //setNumOfPages(data.total_pages);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page]);
  return (
    <>
      <span className='pageTitle' >Search</span>
      <div style={{display:"flex"}}>
        
        <TextField
          className='searchBox'
          id="filled-search"
          label="Search field"
          onChange={(e) => setSearchText(e.target.value)}
          type="search"
          noValidate
        />
        <IconButton color="primary" aria-label="add to shopping cart" onClick={fetchSearch}>
        <SearchIcon />
        </IconButton>
      </div>
      <div className="trending">
        {content.map((c)=> (
          <SingleContent 
          key={c.id}
          id={c.id}
          poster={c.poster_path}
          title={c.title || c.name}
          date={c.first_air_date || c.release_date}
          media_type="movie"
          vote_average={c.vote_average}
          genre_ids={c.genre_ids}
          />
        ))}
      </div>
    </>
  )
}

export default Search