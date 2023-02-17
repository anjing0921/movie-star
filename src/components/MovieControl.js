import React, { useContext } from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


const MovieControl = () => {

  // const {
  //   removeMovieFromWatchlist
  // } = useContext(GlobalContext);



  return (
    <>
    <Button variant="outlined" startIcon={<DeleteIcon />}
            //onClick={() => removeMovieFromWatchlist(movie.id)}
    >
        Delete
      </Button>

    </>
  )
}

export default MovieControl