import "./App.css";
import BottomNav from "./components/BottomNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { Container } from "@mui/material";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Search from "./Pages/Search/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import Watchlist from "./components/Watchkist";
//import Series from './Pages/Series/Series'

function App() {
  const [trendingContent, setTrendingContent] = useState([]);
  const [moviesContent, setMoviesContent] = useState([]);
  const [page, setPage] = useState(1);
  const [watchlist, setWatchList] = useState([]);
  const [searchContent, setSearchContent] = useState([]);

  const fetchWatchList = async () => {
    const { data } = await axios.get(
      "https://movie-star-back-end.herokuapp.com/viewers/2/watchlist"
    );
    //console.log(data);
    setWatchList(data);
  };
  useEffect(() => {
    fetchWatchList();
  }, []);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    //console.log(data.results);
    setTrendingContent(data.results);
  };

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&&sort_by=popularity.desc&page=1&vote_average.gte=8.5&include_adult=false`
    );
    setMoviesContent(data.results);
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
  }, []);

  return (
    <>
      <BrowserRouter>
        <span>
          <Header />
        </span>
        <div className="app">
          <Container>
            <Routes>
              <Route
                path="/"
                element={
                  <Trending
                    page={page}
                    trendingContent={trendingContent}
                    setPage={setPage}
                    watchlist={watchlist}
                    setWatchList={setWatchList}
                    fetchTrending={fetchTrending}
                  />
                }
              />
              <Route path="/movies" element={<Movies />} />
              <Route
                path="/list"
                element={
                  <Watchlist
                    watchlist={watchlist}
                    setWatchList={setWatchList}
                  />
                }
              />
              <Route
                path="/search"
                element={
                  <Search
                    searchContent={searchContent}
                    setWatchList={setWatchList}
                    watchlist={watchlist}
                  />
                }
              />
            </Routes>
          </Container>
        </div>
        <BottomNav />
      </BrowserRouter>
    </>
  );
}

export default App;
