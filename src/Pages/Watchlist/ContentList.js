import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { IconButton} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import {useContext} from 'react';
// import AuthContext from '../store/auth-context'
import fetchContext from '../../store/fetch-context'

const ContentList =() =>{
    // const authCtx = useContext(AuthContext)
    const fetchCtx = useContext(fetchContext)
    console.log(fetchCtx.watchlist)

    const init_watchlist = fetchCtx.watchlist

    return (
        <>
        <List>
            {init_watchlist.map((movie) => {
                return (
                    <ListItem
                        key={movie.id}
                        secondaryAction = {
                            <IconButton area-label='delete'>
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <ListItemButton>
                            <ListItemText id={movie.id} primary={movie.viewer_comment} />
                        </ListItemButton>
                    </ListItem>                    
                )
            })}s
        </List>
        </>
    )

};

export default ContentList;