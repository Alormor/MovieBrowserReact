import './assets/styles/movies.css'

export default function Movie({id, poster, title}) { 
    const handleError = (e) => {
        e.target.onerror = null; 
        e.target.src = "/assets/images/no-image.png";
        e.target.style.border = "none";
    };

    return (
        <div className='divMovies-movie'>
            <figure>
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