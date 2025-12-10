import Movie from './Movie'

export default function ShowMovies({movies}) {

    let movieSequence = movies.map((movie, index) => 
        <Movie 
            key={index}
            id={movie.imdbID} 
            poster={movie.Poster}
            title={movie.Title}
        ></Movie>);
    return (
        <section className='sectMoviesWrapper'>
            <div className='divMovies'>
                {movieSequence}
            </div>
        </section>
    )
}