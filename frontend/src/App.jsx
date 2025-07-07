import './App.css'
import MovieCard from "./components/MovieCard"

function App() {
  const movieNumber = 1;
  return (
  <>
    {movieNumber === 1 && <MovieCard movie={{title: "Hero", release_date: "2024"}}/>}
  </>   
  );
}


export default App
