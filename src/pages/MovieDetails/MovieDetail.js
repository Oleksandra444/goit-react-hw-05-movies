import { apiMovieDetails } from "api";
import { MovieDetails } from "components/MovieDetails/MovieDetails";
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useRef } from "react";
import { Title, StyledLink, StyledButton } from "components/MovieDetails/MovieDetails.styled";


export default function MovieDetail() { 
    
    const {movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const backLocation = useRef(location);

    
    
    
    useEffect(() => {
        async function getMovieDetail() {

            try {
                const movieDetail = await apiMovieDetails(movieId);
                setMovie(movieDetail)
            }
            catch (error) {
                console.log(error);
            }
            

        }
         
        getMovieDetail();

    }, [movieId]);  
    


    return <div>
        
      <Link to={backLocation.current.state?.from ?? '/'}>
        <StyledButton type="button">Go back</StyledButton>
      </Link>
        
        <MovieDetails movie={movie} />
        
        <div>
            <Title>Additional information</Title>
            <StyledLink to={`/movies/${movieId}/cast`} > Cast</StyledLink>
            <StyledLink to={`/movies/${movieId}/review`} > Rewievs</StyledLink>
        </div>
        
        <Outlet/>
    </div>


}