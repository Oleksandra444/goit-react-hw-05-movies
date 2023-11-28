import { MovieImage, MovieDetailWrapper, MovieInfoWrapper, ImageWrapper, MovieTitle } from "./MovieDetails.styled";
export const MovieDetails = ({ movie }) => { 
    
    const { backdrop_path, title, vote_average, overview, release_date, genres } = movie || {};
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

    

    return <>
        
       
        {movie &&
            <MovieDetailWrapper>
                <ImageWrapper><MovieImage src={backdrop_path ? (`https://image.tmdb.org/t/p/w500${backdrop_path}`) : defaultImg} alt={title}></MovieImage></ImageWrapper>                
                <MovieInfoWrapper>
                    <MovieTitle>{title} ({release_date.split("-")[0]})</MovieTitle>
                    <p>
                        User Score: {Math.round(Number(vote_average) * 10)}%
                    </p>
                    <h3>Overview</h3>
                    <p>
                        {overview}
                    </p>
                    <h3>Genres</h3>
                    <p>
                        {genres.map(genre => genre.name).join(', ')}
                    </p>
                </MovieInfoWrapper>
            </MovieDetailWrapper>}
       
        </>


}