import React from 'react'
import './SingleContent.css'
import Badge from '@mui/material/Badge';

const SingleContent = ({id,
  poster,
  title,
  date,
  media_type,
  vote_average,}) => {
  return (
    <>
    
    <div className='media'>
    <Badge  badgeContent={vote_average.toFixed(1)}
            color={vote_average > 6 ? "primary" : "secondary"}
      />
    <img
        className="poster"
        src={`https://image.tmdb.org/t/p/w200${poster}`}
        alt={`${title} Poster`}
      />
    <b className="title">{title}</b>
    <span className="subTitle">
      {media_type === "tv" ? "TV Series" : "Movie"}
    <span className="subTitle">{date}</span>
    </span>
    </div>
    </>
  )
}

export default SingleContent