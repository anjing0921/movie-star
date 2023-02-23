import React, { useState, useEffect } from 'react';
import axios from 'axios'

const BACK_END_URL=process.env.REACT_APP_BACKEND_URL;

const FetchContext = React.createContext({
    watchlist: [],
    genres:[],
    getWatchlist: ()=>{},
    onAdd: ()=> {},
    onRemove: ()=> {},
    onUpdate: ()=> {},
    onSort: ()=> {},
    onFilter: () => {},
    byGenre: ()=> {},
    getGenres: () => {}
    });

export const FetchContextProvider = (props) => {
    const [watchlist, setWatchList] = useState([]);
    const [genres, setGenres] = useState([]);

    const getAllWatchList = async (viewer_id) => {
        const { data } = await axios.get(
            `${BACK_END_URL}viewers/${viewer_id}/watchlist`
            );
        setWatchList(data);
        };
    
    const getAllGenres = async (viewer_id) => {
        const { data } = await axios.get(
            `${BACK_END_URL}genres`
            );
            setGenres(data);
        };

    useEffect(() => {
        getAllGenres();
    }, [])
    

    const addToWatchList = async (viewer_id, request_body) => {
        await axios.post(
            `${BACK_END_URL}watchlist/${viewer_id}/add`,
            request_body
            ).catch((err) => (alert(err.response.data)))
            getAllWatchList(viewer_id)
        };

    const deleteFromWatchList = async (viewer_id, watchlist_id) => {
        await axios.delete(
            `${BACK_END_URL}watchlist/${watchlist_id}`
            )
            getAllWatchList(viewer_id)            
        };

    const updateWatchlist = async (viewer_id, watchlist_id, request_body) => {
        await axios.put(
            `${BACK_END_URL}watchlist/${watchlist_id}`, request_body         
            )
        }
    
    const filterWatchlistByGenre = async (viewer_id, parameter) => {
        const { data } = await axios.get(
            `${BACK_END_URL}viewers/${viewer_id}/watchlist` ,{ params: parameter }
            );
        setWatchList(data);
    }

    const HandleSortContents = (value) => {
        if (value === 'rate'){
            setWatchList((watchlist) => 
            [...watchlist].sort((a, b) => b.watchlists[0].viewer_rate - a.watchlists[0].viewer_rate)
            )
        } else if (value === 'date') {
            setWatchList((watchlist) => 
            [...watchlist].sort((a, b) => new Date(b.date) - new Date(a.date))
            )
        } else if (value === 'title') {
            setWatchList((watchlist) => 
            [...watchlist].sort((a, b) => a.title.localeCompare(b.title))
            )
        }
        
    } 

    const HandleFilterContents = (id, value) => {
        const parameter = {"filter":value};
        const viewer_id = id;
        if (value === 0){
            axios.get(       
                `${BACK_END_URL}viewers/${viewer_id}/watchlist`
            ).then((data) => {
                setWatchList([...data.data])
            }).catch((err) => {
                alert(err.response.data.details)
            });
        } else{
            axios.get(       
                `${BACK_END_URL}viewers/${viewer_id}/watchlist`,
                { params: parameter }
            ).then((data) => {

                setWatchList([...data.data])
            }).catch((err) => {
                alert(err.response.data.details)
            });
        }          
        }

    const contextValue = {
        watchlist: watchlist,
        genres: genres,
        getWatchlist: getAllWatchList,
        onAdd: addToWatchList,
        onRemove: deleteFromWatchList,
        onUpdate: updateWatchlist,
        byGenre: filterWatchlistByGenre,
        onSort: HandleSortContents,
        onFilter: HandleFilterContents,
        getGenres: getAllGenres
    }

    return (
        <FetchContext.Provider value={contextValue}>
            {props.children}
        </FetchContext.Provider>
    );
}

export default FetchContext;