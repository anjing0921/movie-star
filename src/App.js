import "./App.css";
import BottomNav from "./components/BottomNav";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import { Container } from "@mui/material";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Search from "./Pages/Search/Search";
import { useEffect, useState} from "react";
import axios from "axios";
import WatchlistPage from "./Pages/Watchlist/WatchlistPage";
import Login from "./Pages/Login/Login"
import AuthPage from "./Pages/Auth/AuthPage";

function App() {

  // const [searchContent, setSearchContent] = useState([]);
  const [trendingContent, setTrendingContent] = useState([]);
  const [moviesContent, setMoviesContent] = useState([]);
  const [page, setPage] = useState(1);

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
        <section className="app">
          <Container>
            <Routes>
              <Route
                path="/"
                element={
                  <Trending
                    page={page}
                    trendingContent={trendingContent}
                    setPage={setPage}
                    fetchTrending={fetchTrending}
                  />
                }
              />
              <Route path="/movies" element={<Movies moviesContent={moviesContent}/>}/>
              <Route path="/login" element={<Login />} />
              <Route path="/auth" element={<AuthPage />}/>              
              <Route path="/list" element={<WatchlistPage/>}/>
              <Route path="/search" element={<Search/>}/>
            </Routes>                       
          </Container>
        </section>
        <BottomNav />
      </BrowserRouter>
    </>
  );
}

export default App;
