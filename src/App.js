import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import Home from './routes/Home';
import Revenue from './routes/Revenue';
import IncomeStatement from './routes/incomeStatement';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:companyName" element={<Revenue />} />
        <Route path="/:companyName/:year" element={<IncomeStatement />} />
      </Route>
    </Routes>
  );
}

export default App;
