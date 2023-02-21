import List from '@mui/material/List';
import React, {useContext, useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import ContentCard from './ContentCard'
import AuthContext from '../../store/auth-context'
import FetchContext from '../../store/fetch-context'
import SortButton from './SortButton';
import FilterButton from './FilterButton';
import axios from 'axios';

const BACK_END_URL=process.env.REACT_APP_BACKEND_URL;

const ContentList =() =>{
    const authCtx = useContext(AuthContext)
    const fetchCtx = useContext(FetchContext)
    const [contents, setContents] = useState(fetchCtx.watchlist)
    
    const HandleSortContents = (value) => {
        if (value === 'rate'){
            setContents((contents) => 
            [...contents].sort((a, b) => b.watchlists[0].viewer_rate - a.watchlists[0].viewer_rate)
            )
        } else if (value === 'date') {
            setContents((contents) => 
            [...contents].sort((a, b) => new Date(b.date) - new Date(a.date))
            )
        } else if (value === 'title') {
            setContents((contents) => 
            [...contents].sort((a, b) => a.title.localeCompare(b.title))
            )
        }
        
    } 

    const HandleFilterContents = (value) => {
        const parameter = {"filter":value};
        const viewer_id = authCtx.token;
        if (value === 0){
            axios.get(       
                `${BACK_END_URL}viewers/${viewer_id}/watchlist`
            ).then((data) => {
                console.log('origin!', data.data)
                setContents([...data.data])
            }).catch((err) => {
                alert(err.response.data.details)
            });
        } else{
            axios.get(       
                `${BACK_END_URL}viewers/${viewer_id}/watchlist`,
                { params: parameter }
            ).then((data) => {
                console.log('filtered!', data.data)
                setContents([...data.data])
            }).catch((err) => {
                alert(err.response.data.details)
            });
        }          
        }
    
    return (
        <>
        <Box sx={{display: 'flex', flexDirection: 'row',justifyContent:'space-between'}}>
        <SortButton onSort={HandleSortContents}/>
        <FilterButton onFilter={HandleFilterContents}/>
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