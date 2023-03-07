import React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const CharacterDetailsPage = lazy(() =>
  import('pages/CharacterDetailsPage/CharacterDetailsPage')
);
const CharactersPage = lazy(() =>
  import('pages/CharactersPage/CharactersPage')
);

export default function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/characters" element={<CharactersPage />} />
        <Route
          path="/characters/:characterId"
          element={<CharacterDetailsPage />}
        />
        <Route path="*" element={<CharactersPage />} />
      </Routes>
    </Suspense>
  );
}
