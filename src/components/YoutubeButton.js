import * as React from 'react';
import Button from '@mui/material/Button';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { createTheme } from '@mui/material/styles';
import red from '@mui/material/colors/red';

const theme = createTheme({
  palette: {
    primary: red,
  },
});


export default function YoutubeButton({video}) {
  return (
      <Button variant="contained" 
      color="error"
      href={`https://www.youtube.com/watch?v=${video}`}
      startIcon={<YouTubeIcon />}>
        Watch the Trailer
      </Button>
  );
}