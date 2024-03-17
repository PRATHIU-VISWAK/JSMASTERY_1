import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import MovieCard from "../src/components/MovieCard";
import axios from "axios";

//5a20e59a
function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [name, setName] = useState("superman");
  const API_URL = "https://www.omdbapi.com/?apikey=5a20e59a";

  const fetching = async (title) => {
    try {
      const response = await axios.get(`${API_URL}&s=${title}`);
      setMovies(response.data.Search);
      console.log(response.data.Search);
    } catch (error) {
      console.log("axios error", error);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetching("superman");
  }, []);

  return (
    <div className="App">
      <h1>Movie Land</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <button
          onClick={() => {
            fetching(name);
          }}
        >
          {" "}
          click
        </button>
      </div>

      <div className="container">
        

        {isLoading ? <h1>Loading </h1> : 
        <>
        {
           movies.map((movie, index) => (
            <MovieCard key={index}  movie={movie}/>
           ))
        }

        </>
        }
      </div>
    </div>
  );
}

export default App;
