import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TheatersIcon from '@mui/icons-material/Theaters';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import RestartAltIcon from '@mui/icons-material/RestartAlt';


export default function SelectType({type, onSetType}) {

    const selectMoviesHandler = () => {
        onSetType('movie')
    };
    const selectTVSeriesHandler= () => {
        onSetType('tv')
    };

    const resetHandler = () => {
        onSetType('')
    }

    return (
        <Box>
            {(type === 'movie')? 
            <Button variant="contained" startIcon={<TheatersIcon/>} sx={{margin:1}} disabled> 
                Movies
            </Button>
            :<Button onClick={selectMoviesHandler} variant="contained" startIcon={<TheatersIcon/>} sx={{margin:1}}>
                Movies
            </Button>   
            }
            {(type === 'tv')? 
            <Button variant="contained" startIcon={ <OndemandVideoIcon/>} sx={{margin:1}} disabled>
                TV Series
            </Button>
            :<Button onClick={selectTVSeriesHandler} variant="contained" startIcon={ <OndemandVideoIcon/>}  sx={{margin:1}}>
                TV Series
            </Button>
            }
            {(type === '')?
            <Button onClick={resetHandler} variant="contained" startIcon={ <RestartAltIcon/>}  sx={{margin:1}} disabled>
                Reset
            </Button>
            :<Button onClick={resetHandler} variant="contained" startIcon={ <RestartAltIcon/>}  sx={{margin:1}}>
                Reset
            </Button>
            }   

        </Box>
        );
}