import './App.css';
import BottomNav from './components/BottomNav';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import { Container } from '@mui/material'
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies'
import Search from './Pages/Search/Search'
import Series from './Pages/Series/Series'


function App() {

  return (
    <>
    <BrowserRouter>
      <span>
        <Header/>
      </span>
      <div className="app">
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <BottomNav />
    </BrowserRouter>
    </>
  );
}

export default App;
