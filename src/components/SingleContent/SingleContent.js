import React from 'react'
import './SingleContent.css'
import Badge from '@mui/material/Badge';
import ContentModal from '../ContentModal/ContentModal';
import Rating from '@mui/material/Rating'

const SingleContent = ({id,
  poster,
  title,
  date,
  media_type,
  vote_average,
  setWatchList,watchlist}) => {
  return (
    <>
    
    <ContentModal media_type={media_type} id={id} setWatchList={setWatchList} watchlist={watchlist}>
      <Badge  badgeContent={vote_average.toFixed(1)}
            color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={`https://image.tmdb.org/t/p/w200${poster}`}
        alt={`${title} Poster`}
      />
      <b className="title">{title}</b>
      <Rating name="star-rate" value={vote_average / 2 } precision={0.01} readOnly />
      <span className="subTitle">
      {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </ContentModal>
    </>
  )
}

export default SingleContent