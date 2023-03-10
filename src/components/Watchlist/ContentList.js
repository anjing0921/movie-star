import List from '@mui/material/List';
import React, {useContext, useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import ContentCard from './ContentCard'
import AuthContext from '../../store/auth-context'
import FetchContext from '../../store/fetch-context'
import SortButton from './SortButton';
import FilterButton from './FilterButton';
import SelectType from './SelectType';

const ContentList =() =>{
    const authCtx = useContext(AuthContext)
    const fetchCtx = useContext(FetchContext)
    const [type, setType] = useState('')
    
    const HandleSortContents = (value) => {
        fetchCtx.onSort(value)
    } 

    const HandleFilterContents = (value) => {
        fetchCtx.onFilter(authCtx.token, value)
    }

    let contents;
    if (type === ''){
        contents = fetchCtx.watchlist;
    } else {
        contents = [...fetchCtx.watchlist].filter((content)=>content.media_type === type)
    }

    const genreIds = new Set([].concat(...contents.map(c => c.genre_ids)))
    let genreDict = {}; //{id: name}
    for (let genre of fetchCtx.genres) {
        genreDict[genre.id]= genre.name
    }
    let allGenres = [{id:0, name:'All'}];
    for (let genreId of genreIds){
        allGenres.push({
            id : genreId,
            name : genreDict[genreId]
        }) 
    }
    
    return (
        <>
        <Box sx={{display: 'flex', flexDirection: 'row',justifyContent:'space-between'}}>
            <SortButton onSort={HandleSortContents}/>
            <SelectType type={type} onSetType={setType}/>
            <FilterButton genres={allGenres} onFilter={HandleFilterContents}/>
        </Box>
        <List>
            {contents && 
                contents.map((content) => {
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