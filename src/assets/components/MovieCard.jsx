function MovieCard({ inputMovie }) {
    const curMovie = inputMovie;
    return (
        <>
            <div className="card h-100">
                <div className="card-header">
                    <h5 className="card-title">{curMovie.title}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">Genere: {curMovie.genre}</p>
                </div>
            </div>
        </>
    )
}

export default MovieCard;