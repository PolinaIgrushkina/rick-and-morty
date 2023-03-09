import React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import GoogleOauth from './GoogleOauth/GoogleOauth';
import Loader from './Loader/Loader';

const CharacterDetailsPage = lazy(() =>
  import('pages/CharacterDetailsPage/CharacterDetailsPage')
);
const CharactersPage = lazy(() =>
  import('pages/CharactersPage/CharactersPage')
);

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <GoogleOauth />

      <Routes>
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/characters/:id" element={<CharacterDetailsPage />} />
        <Route path="*" element={<CharactersPage />} />
      </Routes>
    </Suspense>
  );
}
