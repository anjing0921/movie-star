import React, {useState} from 'react'
import MovieControl from './MovieControl'
import StyledRating from '@mui/material/Rating'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Textarea from '@mui/material/TextareaAutosize'

const MovieCard = ({movie}) => {
  
  const rate = movie.watchlists[0].viewer_rate / 2
  const message = movie.watchlists[0].viewer_comment
  const [value, setValue] = useState(rate)
  const [comment, setComment] = useState(message)
  const valueHandler = (event, newValue) => {
    setValue(newValue);
  }
  const textHandler = (event, newText) => {
    console.log(event.target.value)
    setComment(newText)
  } 
  return (
    <>
    <div className="movie-card">
      <div className="overlay"></div>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster}`}
        alt={`${movie.title} Poster`}
      />
      
      <StyledRating 
        name="heart-rate" 
        value={value} 
        precision={0.25} 
        onChange={valueHandler} 
        icon={<FavoriteIcon sx={{color:'hotpink'}}/>} 
        emptyIcon={<FavoriteBorderIcon />} 
      />
      <Textarea
        color="neutral"
        minRows={2}
        placeholder={comment}
        size="lg"
        variant="outlined"
        onChange={textHandler}
      />
      <MovieControl movie={movie}/>
    </div>
    </>
  )
}

export default MovieCard