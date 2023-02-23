import { Chip } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

const Genres = ({
    selectedGenres,
    setSelectedGenres,
    genres,
    setGenres,
    type,
}) => {

    const handleAdd = (genre) => {
        setSelectedGenres([...selectedGenres, genre]);
        setGenres(genres.filter((g) => g.id !== genre.id));
    };

    const handleRemove = (genre) => {
        setSelectedGenres(
        selectedGenres.filter((selected) => selected.id !== genre.id)
        );
        setGenres([...genres, genre]);
    };

    const fetchGenres = async () => {
        const { data } = await axios.get(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        setGenres(data.genres);
    };

    const fetchTVGenres = async () => {
        const { data } = await axios.get(
        `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        setGenres(data.genres);
    };

    const fetchAllGenres = async () => {
        const { data } = await axios.get(
        `https://api.themoviedb.org/3/genre/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        setGenres(data.genres);
    };
    useEffect(() => {
        fetchGenres();
        fetchTVGenres();
        fetchAllGenres();
        // eslint-disable-next-line
    }, []);

    return (
        <div style={{ padding: "6px 0" }}>
            {selectedGenres.map((genre) => (
                <Chip
                    // style={{ margin: 2, backgroundColor:'#d6ccc2' }}
                    sx={{ bgcolor: 'green', color: 'white' }}
                    label={genre.name}
                    key={genre.id}
                    color="primary"
                    clickable
                    size="small"
                    onDelete={() => handleRemove(genre)}
                />
            ))}
            {genres.map((genre) => (
                <Chip
                    style={{ fontFamily:'Lato', margin: 2, backgroundColor:'#6d6875', color:'white'}}
                    label={genre.name}
                    key={genre.id}
                    clickable
                    size="small"
                    onClick={() => handleAdd(genre)}
                />
            ))}
    </div>
    );
};

export default Genres;