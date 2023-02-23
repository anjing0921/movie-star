import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Container } from "@mui/material";
import Header from "./components/Header/Header";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import TVSeries from "./Pages/TVSeries/TVSeries"
import LoginForm from "./Pages/Login/LoginForm"
import LogoutPage from "./Pages/Logout/LogoutPage";
import Search from "./Pages/Search/Search";
import WatchlistPage from "./Pages/Watchlist/WatchlistPage";
import BottomNav from "./components/BottomNav";
// import FontHeader from "./Pages/FontHeader/FontHeader"

function App() {

  return (
    <>
      <BrowserRouter>
        <span>
          {/* <FontHeader /> */}
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
              <Route path="/login" element={<LoginForm />} />
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
