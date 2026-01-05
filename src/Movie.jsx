import { useState, useEffect } from "react";
import './assets/styles/movies.css'

export default function Movie({id, poster, title, onSelect}) { 
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        let stored = JSON.parse(localStorage.getItem("favourites")) || [];
        let isLiked = stored.some(fav => fav.id === id);
        setLiked(isLiked);
    }, [id]);
    
    const handleError = (e) => {
        e.target.onerror = null; 
        e.target.src = "/assets/images/no-image.png";
        e.target.style.border = "none";
    };

    function handleHeart(e){
        e.stopPropagation();
        let stored = JSON.parse(localStorage.getItem("favourites")) || [];
        let newFaves;
        
        if (liked) newFaves = stored.filter(fav => fav.id !== id);
        else newFaves = [...stored, { id, title, poster }];
    
        localStorage.setItem("favourites", JSON.stringify(newFaves));
        setLiked(!liked);
    }

    return (
        <div className='divMovies-movie' onClick={() => onSelect(id)}>
            <figure>
                <span>
                    <i
                        className={`fa-heart movie-heart ${liked ? 'fa-solid' : 'fa-regular'}`}
                        onClick={handleHeart}
                    ></i>
                </span>
                <img id={id}
                    src={poster}
                    onError={handleError}
                    alt={title}
                ></img>
                <figcaption>{title}</figcaption>
            </figure>
        </div>
    )
}