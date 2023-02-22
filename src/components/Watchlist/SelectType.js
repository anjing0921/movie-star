import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TheatersIcon from '@mui/icons-material/Theaters';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

export default function SelectType({type, onSetType}) {
    const [select, setSelect] = useState('');

    const selectMoviesHandler = () => {
        setSelect('movie')
        onSetType('movie')
    };
    const selectTVSeriesHandler= () => {
        setSelect('tv')
        onSetType('tv')
    };
    console.log(select)
    return (
        <Box>
            {(type === 'movie')? <Button variant="contained" startIcon={<TheatersIcon/>} sx={{margin:1}} disabled> Movies</Button>
            :<Button onClick={selectMoviesHandler} variant="contained" startIcon={<TheatersIcon/>} sx={{margin:1}}>
            Movies
            </Button>   
            }
            {(type === 'tv')? <Button variant="contained" startIcon={ <OndemandVideoIcon/>} sx={{margin:1}} disabled>TV Series</Button>
            :<Button onClick={selectTVSeriesHandler} variant="contained" startIcon={ <OndemandVideoIcon/>}  sx={{margin:1}}>
            TV Series
            </Button>
            }
        </Box>
        );
}
