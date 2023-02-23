import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TheatersIcon from '@mui/icons-material/Theaters';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../theme';

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
        <ThemeProvider theme={theme}>
        <Box >
            {(type === 'movie')? 
            <Button disabled  variant="contained" startIcon={<TheatersIcon/>} sx={{margin:1}}> 
                Movies
            </Button>
            :<Button  style={{fontFamily:'Lato'}} onClick={selectMoviesHandler} variant="contained" startIcon={<TheatersIcon/>} sx={{margin:1}}>
                Movies
            </Button>   
            }
            {(type === 'tv')? 
            <Button disabled variant="contained" startIcon={ <OndemandVideoIcon/>} sx={{margin:1}} >
                TV Series
            </Button>
            :<Button onClick={selectTVSeriesHandler} variant="contained" startIcon={ <OndemandVideoIcon/>}  sx={{margin:1}}>
                TV Series
            </Button>
            }
            {(type === '')?
            <Button  disabled onClick={resetHandler} variant="contained" startIcon={ <RestartAltIcon/>}  sx={{margin:1}}>
                Reset
            </Button>
            :<Button onClick={resetHandler} variant="contained" startIcon={ <RestartAltIcon/>}  sx={{margin:1}}>
                Reset
            </Button>
            }   

        </Box>
        </ThemeProvider>
        );
}
