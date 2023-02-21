// import Watchlist from '../../components/Watchlist';
import ContentList from "../../components/Watchlist/ContentList";

const WatchlistPage = () => {
    return (
    <div className="movie-page">
        <div className="container">
            <div >
                <span className="pageTitle">Watch list</span>
            </div>
            <ContentList />
        </div>
    </div>
    )
};

export default WatchlistPage;