import { Routes, Route, Navigate } from 'react-router-dom';
import RecentlyAdded from './components/RecentlyAdded/RecentlyAdded';
import Favorites from './components/Favorites/Favorites';
import './App.css';

const App = () => (
  <Routes>
    <Route path="/recently-added" element={< RecentlyAdded />} />
    <Route path="/favorites" element={<Favorites />} />
    <Route path="/" element={<Navigate to="/recently-added" />} />
  </Routes>
);

export default App;
