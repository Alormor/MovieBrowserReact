import { useState } from "react";
import { useEffect } from "react";
import ShowMovies from "./ShowMovies";
import SearchBar from "./SearchBar";

export default function SearchPage() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("star");
    const [year, setYear] = useState("");
    const [type, setType] = useState("");
    const [page, setPage] = useState(1);

    useEffect(() =>{
        console.log(query)
        if(query != undefined){
            fetch(`https://www.omdbapi.com/?apikey=dfe7b98e&s=${query}&page=${page}&y=${year}&type=${type}`).then(
            response => response.json()).then(data =>{
                fetchedMovies(data.Search);
            });
        }
    }, [query]);

    function fetchedMovies(movieList){
        setMovies([...movies, ...movieList]);
    }

    const search = (newQuery, newYear, newType) => {
        setMovies([]);
        setQuery(newQuery);
        setYear(newYear);
        setType(newType);
        setPage(1);
    }

    return (
        <>
            <SearchBar onSearch={search()}/>
            <ShowMovies movies={movies} />
        </>
    )
}