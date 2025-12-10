import './assets/styles/movies.css'

export default function Movie({id, poster, title}) { 
    function fixImage(){
        myImg.onerror = () => {
            myImg.src = "assets/images/no-image.png";
            myImg.style.border = "none";
        };
    }

    return (
        <div className='divMovies-movie'>
            <figure>
                <img id={id} src={poster} ></img>
                <figcaption>{title}</figcaption>
            </figure>
        </div>
    )
}