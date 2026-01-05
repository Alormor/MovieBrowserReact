import { useState, useEffect } from "react";
import './assets/styles/movies.css'

export default function FavouritePage({ onSelect }) {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        let saved = JSON.parse(localStorage.getItem("favourites")) || [];
        setFavourites(saved);
    }, []);

    const handleError = (e) => {
        e.target.onerror = null;
        e.target.src = "/assets/images/no-image.png";
    };

    const handleHeart = (e, id) => {
        e.stopPropagation();

        let newFaves = favourites.filter(fav => fav.id !== id);

        localStorage.setItem("favourites", JSON.stringify(newFaves));
        setFavourites(newFaves);
    };

    return (
        <div className="divMovies">
            {favourites.length === 0 && <h1>No hay favoritos</h1>}

            {favourites.map(movie => (
                <div className='divMovies-movie' key={movie.id} onClick={() => onSelect(movie.id)}>
                    <figure>
                        <span>
                            <i
                                className={`fa-heart movie-heart fa-solid`}
                                onClick={(e) => handleHeart(e, movie.id)}
                            ></i>
                        </span>
                        <img
                            id={movie.id}
                            src={movie.poster}
                            onError={handleError}
                            alt={movie.title}
                        />
                        <figcaption>{movie.title}</figcaption>
                    </figure>
                </div>
            ))}
        </div>
    )
}