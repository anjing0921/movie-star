import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import AuthContext from '../store/auth-context';
import FetchContext from '../store/fetch-context';
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

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
        navigate("/series");
      } else if (value === 3) {
        navigate("/search");
      } else if (value === 4) {
        navigate("/list");
      } else if (value === 5) {
        navigate("/login");
      } else if (value === 6) {
        navigate("/logout");
      }

    },[value, navigate]);

    const logoutHandler = () => {
      authCtx.logout();
    }
    
    const WatchlistHandler = () => {
      fetchCtx.getWatchlist(authCtx.token)
    }

    return (
      <ThemeProvider theme={theme}>
        <Box sx={{color:'secondary',width: "100%", position:"fixed", bottom:0, zIndex:100}}>
            <BottomNavigation
                value = {value}
                onChange = {(e, newValue)=>{ setValue(newValue)}}
                showLabels
                style={{ fontWeight: 700 }}
            >
                <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} style={{fontWeight:700}}/>
                <BottomNavigationAction label="Movies" icon={<MovieFilterIcon />} style={{fontWeight:700}}/>
                <BottomNavigationAction label="Series" icon={<LiveTvIcon />} style={{fontWeight:700}}/>
                <BottomNavigationAction label="Search" icon={<SearchIcon />} style={{fontWeight:700}}/>
                {authCtx.isLoggedIn && (<BottomNavigationAction label="WatchList" icon={<ListIcon />} onClick={WatchlistHandler} style={{fontWeight:700}}/>)}
                {!authCtx.isLoggedIn && (<BottomNavigationAction label="Login" icon={<LoginIcon />} />)}
                {authCtx.isLoggedIn && (<BottomNavigationAction label="Logout" icon={<LogoutIcon />} onClick={logoutHandler} style={{fontWeight:700}}/>)}
            </BottomNavigation>    
        </Box>
        </ThemeProvider>
    )
}

export default BottomNav;