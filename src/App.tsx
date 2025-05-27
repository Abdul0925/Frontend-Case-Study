import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProfileDetailPage from './pages/ProfileDetailPage';
import AdminPage from './pages/AdminPage';
import { ProfileProvider } from './context/ProfileContext';
import { MapProvider } from './context/MapContext';

function App() {
  return (
    <Router>
      <ProfileProvider>
        <MapProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="profile/:id" element={<ProfileDetailPage />} />
              <Route path="admin" element={<AdminPage />} />
            </Route>
          </Routes>
        </MapProvider>
      </ProfileProvider>
    </Router>
  );
}

export default App;