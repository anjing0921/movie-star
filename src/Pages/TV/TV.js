import React from "react";
import { useEffect, useState} from "react";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import './TV.css';
import CustomPagination from "../../components/Pagination/CustomPagination";

const TV = () => {
  const [TVContent, setTVContent] = useState([]);
  const [page, setPage] = useState(1);

  const fetchTV = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    setTVContent(data.results);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTV();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {TVContent.map((c)=> (
          <SingleContent 
          key={c.id}
          id={c.id}
          poster={c.poster_path}
          title={c.title || c.name}
          date={c.first_air_date || c.release_date}
          media_type={c.media_type}
          vote_average={c.vote_average}
          genre_ids={c.genre_ids}          
          />
        ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default TV;