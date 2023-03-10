import React, {useContext} from 'react'
import './SingleContent.css'
import { Box } from '@mui/system';
import Badge from '@mui/material/Badge';
import ContentModal from '../ContentModal/ContentModal';
import Rating from '@mui/material/Rating'
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import AuthContext from '../../store/auth-context';
import FetchContext from '../../store/fetch-context'

const DEFAULT_RATE = 5;
const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
  genre_ids

}) => {
  const authCtx = useContext(AuthContext)
  const fetchCtx = useContext(FetchContext)

  
  const checkHandler = () => {    
    const request_body ={
      viewer_id: authCtx.token,
      content: {
        id, poster, title, date, media_type, vote_average, genre_ids
      },
      viewer_rate: DEFAULT_RATE,
      viewer_comment: "" 
    }
    fetchCtx.onAdd(authCtx.token, request_body)
  };

  return (
    <>
    <Box>
    <Box>
    <ContentModal media_type={media_type} id={id} onAddContent={checkHandler}>
      <Badge  badgeContent={vote_average.toFixed(1)}
            color={vote_average > 7.5 ? "primary" : (vote_average > 6 ? "warning" : "error")}
      />
      <img
        className="poster"
        src={poster? `https://image.tmdb.org/t/p/w200${poster}` : "https://www.movienewz.com/img/films/poster-holder.jpg"}
        alt={`${title} Poster`}
      />
      <b className="title">{title}</b>
      <Rating className="rate" name="star-rate" value={vote_average / 2 } precision={0.1} readOnly />
      <span className="subTitle">
      {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </ContentModal>
    </Box>
    {authCtx.isLoggedIn?
    <Box>
      <FormControlLabel
        control={<Checkbox onChange={checkHandler} />}
        label="Add to My Watchlist" sx={{color:'black'}}
      />
    </Box>: <></>}
    </Box>
    
    </>
  )
}

export default SingleContent