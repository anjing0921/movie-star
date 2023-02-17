import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import './Trending.css';
import CustomPagination from "../../components/Pagination/CustomPagination";


const Trending = ({fetchTrending,trendingContent,setPage,setWatchList,watchlist,page}) => {
  
  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {trendingContent.map((c)=> (
          <SingleContent 
          key={c.id}
          id={c.id}
          poster={c.poster_path}
          title={c.title || c.name}
          date={c.first_air_date || c.release_date}
          media_type={c.media_type}
          vote_average={c.vote_average}
          setWatchList={setWatchList}
          watchlist={watchlist}/>
        ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
