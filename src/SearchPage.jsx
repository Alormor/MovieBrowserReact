import { useState } from "react";
import { useEffect } from "react";
import ShowMovies from "./ShowMovies";
import SearchBar from "./SearchBar";

export default function SearchPage() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() =>{
        fetch("https://www.omdbapi.com/?apikey=dfe7b98e&s=star").then(
        response => response.json()).then(data =>{
            fetchedMovies(data.Search);
        });
    }, [page]);

    function fetchedMovies(movieList){
        setMovies([...movies, ...movieList]);
    }

    return (
        <>
            <SearchBar/>
            <ShowMovies movies={movies} />
        </>
    )
}