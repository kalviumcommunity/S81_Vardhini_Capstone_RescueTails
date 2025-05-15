// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PetList from './pages/PetList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PetList />} />
      </Routes>
    </Router>
  );
}

export default App;
