import React, { useState, useEffect } from 'react';
import axios from 'axios'

const BACK_END_URL=process.env.REACT_APP_BACKEND_URL;

const FetchContext = React.createContext({
    watchlist: [],
    });

export const FetchContextProvider = (props) => {
    const [watchlist, setWatchList] = useState([]);

    const fetchWatchList = async () => {
        const { data } = await axios.get(
            `${BACK_END_URL}viewers/2/watchlist`
            );
        console.log(data);
        setWatchList(data);
        };
    useEffect(() => {
        fetchWatchList();
    }, []);

    const contextValue = {
        watchlist:watchlist,
        getWatchlist: fetchWatchList
    }

        return (
            <FetchContext.Provider value={contextValue}>
            {props.children}
            </FetchContext.Provider>
        );
    

}

export default FetchContext;