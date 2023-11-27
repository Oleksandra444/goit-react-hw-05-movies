import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Movie from 'pages/Movie/Movie';
import MovieDetail from 'pages/MovieDetails/MovieDetail';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import { SharedLayout } from './SharedLayout';
import MovieCast from './MovieCast/MovieCast';
import  MovieReview from './MovieReview/MovieReview';
 
export const App = () => {

return (
    
     
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movie />} />
      <Route path="movies/:movieId" element={<MovieDetail />} >
        <Route path="cast" element={<MovieCast/>} />
        <Route path="review" element={<MovieReview/>} />
      </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
      </Routes>
   
  );
};



