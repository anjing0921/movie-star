import List from '@mui/material/List';
import React, {useContext} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import ContentCard from './ContentCard'
import AuthContext from '../../store/auth-context'
import FetchContext from '../../store/fetch-context'
import SortButton from './SortButton';
import FilterButton from './FilterButton';


const ContentList =() =>{
    const authCtx = useContext(AuthContext)
    const fetchCtx = useContext(FetchContext)
    
    const HandleSortContents = (value) => {
        fetchCtx.onSort(value)
    } 

    const HandleFilterContents = (value) => {
        fetchCtx.onFilter(authCtx.token, value)
    }

    return (
        <>
        <Box sx={{display: 'flex', flexDirection: 'row',justifyContent:'space-between'}}>
            <SortButton onSort={HandleSortContents}/>
            <FilterButton genres={fetchCtx.genres} onFilter={HandleFilterContents}/>
        </Box>
        <List>
            {fetchCtx.watchlist && 
                fetchCtx.watchlist.map((content) => {
                return (
                    <Card key={content.id} sx={{ display: 'flex', margin:'1em' }}>
                        {content.watchlists &&
                        <ContentCard 
                            content={content}
                        /> 
                        }
                    </Card>
                )                                     
            })}
        </List>
        </>
    )

};

export default ContentList;