import React from 'react'
import './SingleContent.css'
import { Box } from '@mui/system';
import Badge from '@mui/material/Badge';
import ContentModal from '../ContentModal/ContentModal';
import Rating from '@mui/material/Rating'
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const SingleContent = ({id,
  poster,
  title,
  date,
  media_type,
  vote_average
}) => {

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
    <Box>
    <Box>
    <ContentModal media_type={media_type} id={id} >
      <Badge  badgeContent={vote_average.toFixed(1)}
            color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={`https://image.tmdb.org/t/p/w200${poster}`}
        alt={`${title} Poster`}
      />
      <b className="title">{title}</b>
      <Rating name="star-rate" value={vote_average / 2 } precision={0.1} readOnly />
      <span className="subTitle">
      {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </ContentModal>
    </Box>
    <Box>
      <FormControlLabel
        control={<Checkbox onChange={handleChange} />}
        label="Add to My Watchlist" sx={{color:'black'}}
      />
    </Box>
    </Box>
    
    </>
  )
}

export default SingleContent