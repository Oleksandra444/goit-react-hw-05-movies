import { apiMovieReviews } from "api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReviewList, ReviewTitle, ReviewWrapper, NoReview } from "./MovieReview.styled";

export default function MovieReview() {
    
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();


    useEffect(() => {
        const getReviews = async () => {
            try {
                const review = await apiMovieReviews(movieId);
                setReviews(review);
            }
            catch (error) {
                console.log(error)
            };
        };

        getReviews();

    }, [movieId])

    return <>
        {reviews.length > 0 ? (
            <ReviewWrapper>
            <ReviewList>
            {reviews.map(review => (
            <li key={review.id}>
                    <ReviewTitle>Author: {review.author}</ReviewTitle>
                    <p>{review.content}</p>
            </li>
          ))}


                </ReviewList>
                </ReviewWrapper>) : <NoReview> Вибачте, але на даний час немає оглядів на фільм</NoReview> }
    
    </>




}