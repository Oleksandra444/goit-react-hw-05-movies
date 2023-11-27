import { NavLink } from "react-router-dom";
import { MovieCardWrapper, MoviesList, MovieImageWrapper, MovieImage, MovieTitle, MovieItem} from "./SearchedListMovies.styled";



export const SearchedListMovies = ({ searchMovie, location }) => {
    
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

    return <div>
        {searchMovie && searchMovie.length > 0 ?
     
            <MoviesList>
                {searchMovie.map(({ title, id, backdrop_path }) => (
                    <MovieItem key={id}>
                        <NavLink to={`${id}`} state={{ from: location }}>
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



            : <div> Нічого не знайдено   </div>}
    </div>
}
