import React, { useState } from 'react';
import axios from 'axios'

const BACK_END_URL=process.env.REACT_APP_BACKEND_URL;

const FetchContext = React.createContext({
    watchlist: [],
    getWatchlist: ()=>{},
    onAdd: ()=> {},
    onRemove: ()=> {}
    });

export const FetchContextProvider = (props) => {
    const [watchlist, setWatchList] = useState([]);

    const getAllWatchList = async (viewer_id) => {
        const { data } = await axios.get(
            `${BACK_END_URL}viewers/${viewer_id}/watchlist`
            );
        setWatchList(data);
        };

    const addToWatchList = async (viewer_id, request_body) => {
        const { data } = await axios.post(
            `${BACK_END_URL}watchlist/${viewer_id}/add`,
            request_body
            );
            console.log('Added!', data);
        };

    const deleteFromWatchList = async (viewer_id, watchlist_id) => {
        const { data } = await axios.delete(
            `${BACK_END_URL}watchlist/${watchlist_id}`
            )
            console.log('deleted!', data)
            getAllWatchList(viewer_id)            
        };

    const updateWatchlist = async (viewer_id, watchlist_id, request_body) => {
        console.log(viewer_id, watchlist_id, request_body);
        const { data } = await axios.put(
            `${BACK_END_URL}watchlist/${watchlist_id}`, request_body         
            )
            console.log('updated!', data)                     
        }
    
    const filterWatchlistByGenre = async (viewer_id, parameter) => {
        const { data } = await axios.get(
            `${BACK_END_URL}viewers/${viewer_id}/watchlist` ,{ params: parameter }
            );
        console.log('filtered!', data)
        setWatchList(data);
        getAllWatchList(viewer_id);
    }


    const contextValue = {
        watchlist:watchlist,
        getWatchlist: getAllWatchList,
        onAdd: addToWatchList,
        onRemove: deleteFromWatchList,
        onUpdate: updateWatchlist,
        byGenre: filterWatchlistByGenre
    }

    return (
        <FetchContext.Provider value={contextValue}>
            {props.children}
        </FetchContext.Provider>
    );
}

export default FetchContext;