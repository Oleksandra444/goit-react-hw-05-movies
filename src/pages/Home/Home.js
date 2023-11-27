import { useState, useEffect } from "react";
import { apiTrending } from "api";
import { TopMovies } from "components/TopMovies/TopMovies";


export default function Home() { 
    const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrandMovies = async () => {
      try {
        const trendMovies = await apiTrending();
        setMovies(trendMovies);
      } catch (error) {
        console.log(error);
      }
    };
    getTrandMovies();
  }, []);
    
    return (
        <div>
            <TopMovies movies={movies} />
        </div>);
}