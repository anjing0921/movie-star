import React, {useState, useContext, useRef} from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TelegramIcon from '@mui/icons-material/Telegram';
import TextField from '@mui/material/TextField';
import StyledRating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import fetchContext from '../../store/fetch-context'

const ContentCard = ({content}) => {
    const [value, setvalue] = useState(content.watchlists[0].viewer_rate / 2);
    const [onEdit, setOnEdit] = useState(false);
    const [comment, setComment] = useState (content.watchlists[0].viewer_comment)
    const commentInputRef = useRef();    

    const fetchCtx = useContext(fetchContext);
    const viewer_id = content.watchlists[0].viewer_id;
    const watchlist_id = content.watchlists[0].id;
    const content_id = content.id;
    
    const deleteHandler = () => {
        fetchCtx.onRemove(viewer_id, watchlist_id);
    }
    const editHandler = () => {
        setOnEdit(true);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredComment = commentInputRef.current.value;
        const request_body = {
            "viewer_id": viewer_id,
            "content_id": content_id,
            "viewer_rate": value * 2,
            "viewer_comment": enteredComment 
        }
        fetchCtx.onUpdate(viewer_id, watchlist_id, request_body);
        setOnEdit(false)
        setComment()
    }

    return (
    <ListItem
        key={content.id}
        secondaryAction = {
            <IconButton area-label='delete'>
                <DeleteIcon onClick={deleteHandler}/>
            </IconButton>
        }
        >
        <Box sx={{ display: 'flex', flexDirection: 'row' }}> 
            <CardMedia 
                component="img" sx={{height:120, width:90}} 
                image={`https://image.tmdb.org/t/p/w200${content.poster}`} 
                alt={`${content.title} Poster`}
            />
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'space-between', paddingY :0 }}>
                <CardContent sx={{paddingY:0}}  >
                    <Typography>{content.title}</Typography>
                </CardContent>
                <CardContent sx={{display: 'flex', flexDirection: 'row'}}>
                    <Box component="form" onSubmit={submitHandler} noValidate >
                    {!onEdit && <Typography>{comment}</Typography>}
                    {onEdit && <TextField
                        id="comment"
                        label="Write your comment"
                        name="comment"
                        inputRef={commentInputRef}
                        fullWidth
                        sx ={{minWidth:300, margin:0}}
                    />}                    
                    <Box sx={{ display: 'flex', flexDirection: 'row',  marginLeft: '1em'}}>
                        <Typography>{value? value * 2: 0.0}</Typography>
                        <StyledRating 
                            name="heart-rate" 
                            value={value}
                            onChange={(evnet, newValue)=>setvalue(newValue)} 
                            precision={0.1} 
                            icon={<FavoriteIcon sx={{color:'hotpink'}}/>} 
                            emptyIcon={<FavoriteBorderIcon />} 
                        />                        
                        </Box>
                    </Box>
                    {!onEdit &&
                    <IconButton onClick={editHandler}>
                        <EditIcon/>
                    </IconButton>
                    }
                    {onEdit &&
                    <IconButton onClick={submitHandler}>
                        <TelegramIcon/>
                    </IconButton>
                    }
                </CardContent>
            </Box>               
        </Box>
    </ListItem> 
    )
};

export default ContentCard;