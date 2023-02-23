import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Container } from "@mui/material";
import Header from "./components/Header/Header";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import TVSeries from "./Pages/TVSeries/TVSeries"
import LoginPage from "./Pages/Login/LoginPage"
import LogoutPage from "./Pages/Logout/LogoutPage";
import Search from "./Pages/Search/Search";
import WatchlistPage from "./Pages/Watchlist/WatchlistPage";
import BottomNav from "./components/BottomNav";

function App() {

  return (
    <>
      <BrowserRouter>
        <span>
          <Header />
        </span>
        <section className="app">
          <Container>
            <Routes>
              <Route path="/" element={ <Trending/>}/>
              <Route path="/movies" element={<Movies />}/>
              <Route path="/series" element={<TVSeries />}/>
              <Route path="/search" element={<Search/>}/>
              <Route path="/list" element={<WatchlistPage/>}/>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/logout" element={<LogoutPage />}/>          
            </Routes>                       
          </Container>
        </section>
        <BottomNav />
      </BrowserRouter>
    </>
  );
}

export default App;
