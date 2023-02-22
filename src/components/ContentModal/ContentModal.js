import * as React from 'react';
import  { useEffect, useState, useContext } from "react";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import AuthContext from '../../store/auth-context'

import './ContentModal.css'
import axios from "axios";

import YoutubeButton from '../YoutubeButton';
// import AddonButton from '../AddonButton';


const style = {
  
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "90%",
  height:"80%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ContentModal({children, id, media_type, onAddContent}) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  const authCtx = useContext(AuthContext)

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setContent(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
    // eslint-disable-next-line
  }, []);

  const addMovieToWatchlist = ()=> {
    onAddContent()
  }

  return (
    <div>
      <div  className= "media" onClick={handleOpen}>{children}</div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {content && (
            <Box sx={style}>
              <div className="ContentModal">
                <img src={`https://image.tmdb.org/t/p/w200${content.poster_path}`}
                    alt={content.name || content.title}
                  className="ContentModal__portrait"
                />
                <div className="ContentModal__about">
                  <span className="ContentModal__title">
                  {content.name || content.title} (
                    {content.first_air_date ||
                      content.release_date ||
                      "-----"}
                    )
                  </span> 
              
                  <span className="ContentModal__description">
                    {content.overview}
                  </span>
                  <YoutubeButton video={video}/>
                  {authCtx.isLoggedIn && 
                  (<Button
                    variant="contained"
                    onClick={addMovieToWatchlist}
                  >
                    + Add to watch list
                  </Button>
                  )}
                </div>
              </div>
            </Box>
          )}
        </Fade>
      </Modal>
    </div>
  );
}