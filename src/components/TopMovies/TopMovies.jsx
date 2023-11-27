import { NavLink, useLocation } from "react-router-dom";
import { MovieCardWrapper, MoviesList, MovieImageWrapper, MovieImage, MovieTitle, MovieItem, ListTitle } from "./TopMovies.styled";



export const TopMovies = ({ movies = [] }) => {

const location = useLocation();

const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

    return (<>

        <ListTitle>Trending today</ListTitle>
        <MoviesList>
            {movies.map(({ title, id, backdrop_path }) => (
                <MovieItem key={id}>
                    <NavLink to={`movies/${id}`} state={{ from: location }}>
                        <MovieCardWrapper>                     
                            <MovieImageWrapper>                                
                                {<MovieImage src={backdrop_path ? (`https://image.tmdb.org/t/p/w400${backdrop_path}`) : defaultImg} alt={title}>
                                </MovieImage>}
                            </MovieImageWrapper>

                            <MovieTitle>
                                {title}
                            </MovieTitle> 

                        </MovieCardWrapper>
                    </NavLink>
                </MovieItem>))}
        </MoviesList>
    </>
    
    );
}
