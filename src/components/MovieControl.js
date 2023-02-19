import React, {useContext} from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AuthContext from "../store/auth-context";
import FetchContext from "../store/fetch-context";

const MovieControl = ({movie}) => {

  const authCtx = useContext(AuthContext);
  const fetchCtx = useContext(FetchContext);
  const watchlist_id = movie.watchlists[0].id
  

  const deleteHandler = () => {
    fetchCtx.onDelete(watchlist_id);
    fetchCtx.getWatchlist(authCtx.token)
    }

  return (
    <>
    <Button variant="outlined" startIcon={<DeleteIcon />}
            onClick={deleteHandler}
    > Delete
    </Button>

    </>
  )
}

export default MovieControl