import { useEffect, useState } from "react"
import moviesArray from "./assets/movies"

function App() {
  const [movies, setMovies] = useState(moviesArray)
  const [chosenGenre, setChosenGenre] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies)

  const genreArray = [];
  moviesArray.forEach((curMovie) => {
    if (!genreArray.includes(curMovie.genre)) {
      genreArray.push(curMovie.genre)
    }
  });

  useEffect(() => {
    if (chosenGenre) {
      setFilteredMovies(movies.filter((curMovie) => curMovie.genre === chosenGenre));
    } else {
      setFilteredMovies(movies);
    }
  }, [chosenGenre])

  return (
    <>
      <div className="container">
        <header className="mt-4">
          <h2>React-Movie-Filter</h2>
        </header>

        <main className="mt-4">
          {/* Fileter Section */}
          <section>
            <select name="movieGenre" id="movieGenre" onChange={(event) => setChosenGenre(event.target.value)}>
              <option value="">--scegli un'opzione--</option>
              {
                genreArray.map((curGenre, index) => (
                  <option key={index} value={curGenre}>{curGenre}</option>
                ))
              }
            </select>
            <span className="badge badge-primary text-black">{filteredMovies.length}</span>
          </section>

          {/* Movies Catalog Section*/}
          <section className="mt-4">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
              {
                filteredMovies.map((curMovie, index) => (
                  <div key={index} className="col g-3">
                    <div className="card h-100">
                      <div className="card-header">
                        <h5 className="card-title">{curMovie.title}</h5>
                      </div>
                      <div className="card-body">
                        <p className="card-text">Genere: {curMovie.genre}</p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </section>
        </main >
      </div>
    </>
  )
}

export default App
