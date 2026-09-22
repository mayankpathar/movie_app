import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Movies from './movies';
import Series from './Series';
import Animes from './Animes';
import Downloads from './Downloads';
import Toprated from './Toprated';
import My_list from './My_list';
import Sign from './Sign';
import Home from './Home';
import MovieDetail from './MovieDetail';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/animes" element={<Animes />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/toprated" element={<Toprated />} />
        <Route path="/my-list" element={<My_list />} />
        <Route path="/sign" element={<Sign />} />

        {/* Dynamic TMDB detail pages using useParams */}
        <Route path="/movie/:id" element={<MovieDetail defaultType="movie" />} />
        <Route path="/tv/:id" element={<MovieDetail defaultType="tv" />} />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
