import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import AuthContext from '../store/auth-context';
import FetchContext from '../store/fetch-context';
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

const BottomNav = () => {
    const authCtx = useContext(AuthContext);
    const fetchCtx = useContext(FetchContext);
    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
      if (value === 0) {
        navigate("/");
      } else if (value === 1) {
        navigate("/movies");
      } else if (value === 2) {
        navigate("/login");
      } else if (value === 3) {
        navigate("/search");
      } else if (value === 4) {
        navigate("/list");
      } else if (value === 5) {
        navigate("/auth");
      } else if (value === 6) {
        navigate("/logout");
      }
    },[value, navigate]);

    const logoutHandler = () => {
      authCtx.logout();
      navigate('/trending', {replace:true})
    }
    
    const WatchlistHandler = () => {
      fetchCtx.getWatchlist(authCtx.token)
    }

    return (
        <Box sx={{width: "100%", position:"fixed", bottom:0, zIndex:100}}>
            <BottomNavigation
                value = {value}
                onChange = {(e, newValue)=>{ setValue(newValue)}}
                showLabels
            >
                <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
                <BottomNavigationAction label="Movies" icon={<MovieFilterIcon />} />
                <BottomNavigationAction label="Login" icon={<LoginIcon />} />
                <BottomNavigationAction label="Search" icon={<SearchIcon />} />
                {authCtx.isLoggedIn && (<BottomNavigationAction label="WatchList" icon={<ListIcon />} onClick={WatchlistHandler}/>)}
                {!authCtx.isLoggedIn && (<BottomNavigationAction label="Auth" icon={<LoginIcon />} />)}
                {authCtx.isLoggedIn && (<BottomNavigationAction label="Logout" icon={<LogoutIcon />} onClick={logoutHandler} />)}

            </BottomNavigation>    
        </Box>
    )
}

export default BottomNav;