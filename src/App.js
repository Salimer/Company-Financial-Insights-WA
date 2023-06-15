import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Details from './routes/Details';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
}

export default App;
