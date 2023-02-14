
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