import React, {useContext} from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AuthContext from "../store/auth-context";
import FetchContext from "../store/fetch-context";

const MovieControl = ({movie}) => {

  const authCtx = useContext(AuthContext);
  const fetchCtx = useContext(FetchContext);

  const id = movie.watchlists[0].watchlist_id;
  const viewer_id = authCtx.token;

  const deleteHandler = () => {
    fetchCtx.onRemove(viewer_id, id);
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