import List from '@mui/material/List';
import React, {useContext} from 'react';
import Card from '@mui/material/Card';
import ContentCard from './ContentCard'
import fetchContext from '../../store/fetch-context'

const ContentList =() =>{
    const fetchCtx = useContext(fetchContext)
    const contents = fetchCtx.watchlist

    return (
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
    )

};

export default ContentList;