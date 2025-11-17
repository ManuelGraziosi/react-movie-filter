import { useEffect, useState } from "react";
import moviesArray from "./assets/movies";
import MovieCard from "./assets/components/MovieCard";

function App() {
  const [movies, setMovies] = useState(moviesArray);
  const [chosenGenre, setChosenGenre] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const [searchedTitle, setSearchedTitle] = useState("");

  const genreArray = [];
  moviesArray.forEach((curMovie) => {
    if (!genreArray.includes(curMovie.genre)) {
      genreArray.push(curMovie.genre)
    }
  });

  useEffect(() => {
    let tmpFilteredMovies = movies;

    if (chosenGenre) {
      tmpFilteredMovies = tmpFilteredMovies.filter((curMovie) => curMovie.genre === chosenGenre);
    }

    if (searchedTitle) {
      tmpFilteredMovies = tmpFilteredMovies.filter((curMovie) => curMovie.title.includes(searchedTitle));
    }

    setFilteredMovies(tmpFilteredMovies);
  }, [chosenGenre, searchedTitle])

  function filterByTitle(inputTitle) {
    console.log(inputTitle);

  }

  return (
    <>
      <div className="container">
        <header className="mt-4">
          <h2>React-Movie-Filter</h2>
        </header>

        <main className="mt-4">
          {/* Filter Section */}
          <section>
            {/* Filtro per genere tramite select */}
            <div>
              <select name="movieGenre" id="movieGenre" onChange={(event) => setChosenGenre(event.target.value)}>
                <option value="">--scegli un'opzione--</option>
                {
                  genreArray.map((curGenre, index) => (
                    <option key={index} value={curGenre}>{curGenre}</option>
                  ))
                }
              </select>
              <span className="badge badge-primary text-black">{filteredMovies.length}</span>
            </div>
            {/* /Filtro per genere tramite select */}

            {/* input filtro tramite titolo */}
            <div>
              <div className="input-group mt-3">
                <input type="text" value={searchedTitle} onChange={(event) => setSearchedTitle(event.target.value)}
                  className="form-control" placeholder="Inserisci un titolo da cercare..." aria-label="Inserisci un titolo da cercare..." aria-describedby="basic-addon2" />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button" onClick={() => filterByTitle(searchedTitle)}>Cerca</button>
                </div>
              </div>
            </div>
            {/* /Filtro tramite titolo */}
          </section>

          {/* Movies Catalog Section*/}
          <section className="mt-4">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
              {
                filteredMovies.map((curMovie, index) => (
                  <div key={index} className="col g-3">
                    <MovieCard key={index} inputMovie={curMovie} />
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
