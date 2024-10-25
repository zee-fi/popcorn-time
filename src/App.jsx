import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import { useState } from "react";



function App() {

  const handleSubmit (event) {
        event.preventDefault();

        const movieIds = Math.max(...MoviesToDisplay.map((movieObj) => {
          movieObj.id})
        )
        
        const newMovie = {
          title: title,
          yeaar: year,
          rating: rating,
        }
        
        const newArr = [...MoviesToDisplay, newMovie];
        
        setMoviesToDisplay()
  }

  const [title, setTitle] = useState("");

  return (
    <>
      <section>
        <h2>Create your own movie</h2>
        <form onSubmit={handleSubmit}>
        <label>Title
          <input type="text" 
          name="title" 
          placeholder="enter title" 
          value={title} 
          onChange={(e) => {setTitle(e.target.value)}}
          ></input>
          </label>
          <button>Create</button>
        </form>
      </section>

      <Header />
      <MovieList />
      <Footer />
    </>
  );
}

export default App;
