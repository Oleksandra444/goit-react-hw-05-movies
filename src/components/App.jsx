import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
// import Home from 'pages/Home/Home';
// import Movie from 'pages/Movie/Movie';
// import MovieDetail from 'pages/MovieDetails/MovieDetail';
// import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import { SharedLayout } from './SharedLayout';
import { Navigate } from 'react-router-dom';
// import MovieCast from './MovieCast/MovieCast';
// import MovieReview from './MovieReview/MovieReview';


const Home = lazy(() => import('pages/Home/Home'));
const Movie = lazy(() => import('pages/Movie/Movie'));
const MovieDetail = lazy(() => import('pages/MovieDetails/MovieDetail'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const MovieReview = lazy(() => import('./MovieReview/MovieReview'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));



 
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
      <Route path="*"
        element={
          <Navigate
            to="/"
            replace={true} 
          />
        } />

      </Routes>
   
  );
};



