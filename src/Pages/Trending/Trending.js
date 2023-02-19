import React from "react";
import { useEffect, useState} from "react";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import './Trending.css';
import CustomPagination from "../../components/Pagination/CustomPagination";

const Trending = () => {
  const [trendingContent, setTrendingContent] = useState([]);
  const [page, setPage] = useState(1);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    console.log('Trending', data.results);
    setTrendingContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
  }, []);

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
          />
        ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
