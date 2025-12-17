import { useState, useEffect, useRef } from "react";
import ShowMovies from "./ShowMovies";
import SearchBar from "./SearchBar";
import MovieDetails from "./MovieDetails";

export default function SearchPage() {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const [year, setYear] = useState("");
    const [type, setType] = useState("");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const fetchingRef = useRef(false);

    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        if (!query || query.trim() === "") return;

        fetchingRef.current = true;
        setLoading(true);

        fetch(`https://www.omdbapi.com/?apikey=dfe7b98e&s=${query}&page=${page}&y=${year}&type=${type}`)
            .then(res => res.json())
            .then(data => {
                setMovies(curr => [...curr, ...(data.Search || [])]);
                fetchingRef.current = false;
                setLoading(false);
            });
    }, [query, page, year, type]);

    useEffect(() => {
        const handleScroll = () => {
            const puedeIncrementar =
                !fetchingRef.current &&
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 2;

            if (puedeIncrementar) {
                setPage(curr => curr + 1);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const search = (newQuery, newYear, newType) => {
        if (newQuery.length >= 3 && newQuery !== query) {
            setMovies([]);
            setPage(1);
        }
        setQuery(newQuery);
        setYear(newYear);
        setType(newType);
    };

    const handleSelectMovie = (id) => {
        setLoading(true);

        fetch(`https://www.omdbapi.com/?apikey=dfe7b98e&i=${id}`)
            .then(res => res.json())
            .then(data => {
                setSelectedMovie(data);
                setLoading(false);
            });
    };

    const handleBack = () => setSelectedMovie(null);

    useEffect(() => {
        if (selectedMovie) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [selectedMovie]);

    return (
        <>
            <h1>DeepSpace Movies</h1>
            <SearchBar onSearch={search} />
            
            <ShowMovies movies={movies} onSelect={handleSelectMovie}/>
            {selectedMovie && (
                <div 
                    className="overlay" 
                    onClick={(e) => {
                        if (e.target.classList.contains('overlay')) {
                            handleBack();
                        }
                    }}
                >
                    <MovieDetails movie={selectedMovie} onBack={handleBack} />
                </div>
            )}
            
            {loading && (
                <div className="loading">
                    <img src="/assets/images/load.gif" alt="Loading..." />
                </div>
            )}
        </>
    );
}
