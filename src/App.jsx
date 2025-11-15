import movies from "./assets/movies"

function App() {

  return (
    <>
      <div className="container">
        <header className="mt-4">
          <h2>React-Movie-Filter</h2>
        </header>

        <main className="mt-4">
          {/* Fileter Section */}
          <section>
            <select name="movieGenre" id="movieGenre">
              <option value="">--Please choose an option--</option>
              <option value="Genere1">Genere1</option>
            </select>
          </section>

          {/* Movies Catalog Section*/}
          <section className="mt-4">
            <ul>
              {
                movies.map((curMovie) => (
                  <li>{curMovie.title}</li>
                ))
              }
            </ul>
          </section>
        </main >
      </div>
    </>
  )
}

export default App
