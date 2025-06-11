// src/router.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/overview" element={<Overview />} />
      </Routes>
    </Router>
  );
}
