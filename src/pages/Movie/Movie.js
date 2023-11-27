import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from 'react-router-dom';
import { apiSearch } from "api";
import { SearchedListMovies } from "components/SearchedListMovies/SearchedListMovies";
import { SearchForm } from "components/SearchForm/SearchedForm";


export default function Movie() {
  // const [isLoading, setIsLoading] = useState(false);
  const [searchMovie, setSearchMovie] = useState([]);
  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';
  const location = useLocation();
  
//   const { movieId } = useParams();

//   useEffect(() => {
// if (!movieId) return;
// }, [movieId]);
  
  useEffect(() => {
   if (query === '') {
      return;
    }
    
    const getSearchedMovies = async () => {
        try {
        const movies = await apiSearch(query);
            if (movies && movies.length !== 0)
            {
                setSearchMovie(movies);
          }
          // if (movies.length === 0) {
          //   setSearchMovie(null);
          //   return;
          // }  
          // setSearchMovie(movies);
            
      } catch (error) {
        console.log(error);
      }
    };

    
      getSearchedMovies();
    
 }, [query]);
  
  
  const handleSubmit = event => { 
    event.preventDefault();
    const value = event.target.elements.query.value.trim();
    params.set('query', value);
    setParams(params);
    console.log(searchMovie);
    

  }
  
    
return <>
  <SearchForm handleSubmit={handleSubmit} query={ query} />
    {searchMovie && searchMovie.length > 0  && (
    <SearchedListMovies searchMovie={searchMovie} location={location} />) }
  
  
  </>
}
  
