import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';

const BottomNav = () => {
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
      }
      }, [value, navigate]);
    
    return (
        <Box sx={{width: "100%", position:"fixed", bottom:0, zIndex:100}}>
            <BottomNavigation
                value = {value}
                onChange = {(e, newValue)=>{ setValue(newValue)}}
                showLabels
            >
                <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
                <BottomNavigationAction label="Movies" icon={<MovieFilterIcon />} />
                <BottomNavigationAction label="TV series" icon={<LiveTvIcon />} />
                <BottomNavigationAction label="Search" icon={<SearchIcon />} />
            </BottomNavigation>    
        </Box>
    )
}

export default BottomNav;