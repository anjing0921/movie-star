import React, { useState, useEffect } from 'react';
import axios from 'axios'

const BACK_END_URL=process.env.REACT_APP_BACKEND_URL;

const FetchContext = React.createContext({
    watchlist: [],
    getWatchlist: ()=>{},
    onAdd: ()=> {},
    onDelete: ()=> {}
    });

export const FetchContextProvider = (props) => {
    const [watchlist, setWatchList] = useState([]);

    const fetchWatchList = async (viewer_id) => {
        const { data } = await axios.get(
            `${BACK_END_URL}viewers/${viewer_id}/watchlist`
            );
        console.log(data);
        setWatchList(data);
        };

    // useEffect(() => {
    //     fetchWatchList();
    // }, []);

    const addToWatchList = async (viewer_id, request_body) => {
        const { data } = await axios.post(
            `${BACK_END_URL}watchlist/${viewer_id}/add`,
            request_body
            );
            console.log('Added!', data);
        };

    const deleteFromWatchList = async (watchlist_id) => {
        const { data } = await axios.delete(
            `${BACK_END_URL}watchlist/${watchlist_id}`
            );
            console.log('Deleted!', data);
        };

    useEffect((id) => {
        fetchWatchList(id);
    }, []);

    const contextValue = {
        watchlist:watchlist,
        getWatchlist: fetchWatchList,
        onAdd: addToWatchList,
        onDelete: deleteFromWatchList
    }

        return (
            <FetchContext.Provider value={contextValue}>
            {props.children}
            </FetchContext.Provider>
        );
    

}

export default FetchContext;