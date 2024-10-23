import movies from "../data/movies.json";

function MovieList() {
    return (
        <>
            <div>
                <h1>List of movies:</h1>
                {movies.map((movieObj) => {
                    return <div key={movieObj.id} className="card">
                        <img src={movieObj.imgURL} />
                        <h3>{movieObj.title}</h3>
                        <p>Year: {movieObj.year}</p>
                        <p>Rating: {movieObj.rating}</p>
                    </div>
                })}
            </div>
        </>
    )
}

export default MovieList;