import './assets/styles/movieDetail.css'

export default function MovieDetails({movie, onBack}) {
    if (!movie) return null;

    return (
        <section className="sectDetailMovie">
            <i className="fa fa-long-arrow-left" aria-hidden="true" onClick={onBack}></i>
            <div className='poster-container'>
                <img src={movie.Poster !== "N/A" ? movie.Poster : "/assets/images/no-image.png"} alt={movie.Title} />
            </div>
            <ul>
                <li><strong>Title:</strong> {movie.Title}</li>
                <li><strong>Rated:</strong> {movie.Rated}</li>
                <li><strong>Released:</strong> {movie.Released}</li>
                <li><strong>Runtime:</strong> {movie.Runtime}</li>
                <li><strong>Genre:</strong> {movie.Genre}</li>
                <li><strong>Director:</strong> {movie.Director}</li>
                <li><strong>Writer:</strong> {movie.Writer}</li>
                <li><strong>Actors:</strong> {movie.Actors}</li>
                <li><strong>Plot:</strong> {movie.Plot}</li>
                <li><strong>Language:</strong> {movie.Language}</li>
                <li><strong>Country:</strong> {movie.Country}</li>
                <li><strong>Awards:</strong> {movie.Awards}</li>
                <li><strong>Ratings:</strong>
                    <ul>
                        {movie.Ratings ? movie.Ratings.map((r, index) => [
                            <li key={`source-${index}`}><strong>Source:</strong> {r.Source}</li>,
                            <li key={`value-${index}`} className='liValue'><strong>Value:</strong> {r.Value}</li>,
                        ]) : <li>No ratings</li>}
                    </ul>
                </li>
            </ul>
        </section>
    );
}