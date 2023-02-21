import List from '@mui/material/List';
import React, {useContext, useState} from 'react';
import Card from '@mui/material/Card';
import ContentCard from './ContentCard'
import fetchContext from '../../store/fetch-context'
import SortButton from './SortButton';

const ContentList =() =>{
    const fetchCtx = useContext(fetchContext)
    const [contents, setContents] = useState(fetchCtx.watchlist)
    
    console.log(contents);
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

    return (
        <>
        <SortButton onSort={HandleSortContents}/>
        <List>
            {contents.map((content) => {
                return (
                    <Card key={content.watchlists[0].id} sx={{ display: 'flex', margin:'1em' }}>
                        <ContentCard 
                            content={content}
                        />  
                    </Card>
                )                                     
            })}
        </List>
        </>
    )

};

export default ContentList;