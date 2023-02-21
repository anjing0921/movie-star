import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Container } from "@mui/material";
import Header from "./components/Header/Header";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Login from "./Pages/Login/Login"
import Search from "./Pages/Search/Search";
import WatchlistPage from "./Pages/Watchlist/WatchlistPage";
import AuthPage from "./Pages/Auth/AuthPage";
import BottomNav from "./components/BottomNav";

function App() {

  // const [searchContent, setSearchContent] = useState([]);
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
              <Route path="/login" element={<Login />} />
              <Route path="/search" element={<Search/>}/>
              <Route path="/list" element={<WatchlistPage/>}/>
              <Route path="/auth" element={<AuthPage />}/>      
            </Routes>                       
          </Container>
        </section>
        <BottomNav />
      </BrowserRouter>
    </>
  );
}

export default App;
