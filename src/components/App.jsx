import React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const CharacterDetails = lazy(() =>
  import('pages/CharacterDetails/CharacterDetails')
);
const Characters = lazy(() => import('pages/Characters/Characters'));

export default function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:characterId" element={<CharacterDetails />} />
        <Route path="*" element={<Characters />} />
      </Routes>
    </Suspense>
  );
}
