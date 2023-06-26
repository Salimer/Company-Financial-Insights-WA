import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import Home from './routes/Home';
import Details from './routes/Details';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Route>
    </Routes>
  );
}

export default App;
