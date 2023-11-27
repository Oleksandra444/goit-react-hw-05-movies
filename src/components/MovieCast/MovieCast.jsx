import { apiMovieCredits } from "api";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { CastCardWrapper, CastList, CastImg, CastInformation, CastCharacter } from "./MovieCast.styled";



export default function MovieCast() {
    const [casts, setCasts] = useState([]);
    const { movieId } = useParams();

    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

    


    useEffect(() => {
        const getCasts = async () => {
            try {
                const cast = await apiMovieCredits(movieId);
                setCasts(cast);
            }
            catch (error) {
                console.log(error)
            };
        };

        getCasts();

    }, [movieId])

    return <>
        {casts.length > 0 ? (
            <div>
            <CastList>
            {casts.map(({ profile_path, name, character, id}) => (
                
                <CastCardWrapper key={id}>
                    
                    <CastImg src={profile_path ? (`https://image.tmdb.org/t/p/w500${profile_path}`) : defaultImg} alt={name} />
                    <CastInformation>{name}</CastInformation>
                    <CastCharacter>Character</CastCharacter>
                        <CastInformation>{character}</CastInformation>
                    
                    
            </CastCardWrapper>
          ))}


                </CastList>
                </div>) : <div> Вибачте, інформація про акторів відсутня</div> }
    
    </>



} 