import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/layout';
import RevenuePage from './routes/RevenuePage';
import HomePage from './routes/HomePage';
import IncomeStatementPage from './routes/IncomeStatementPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/:companyName" element={<RevenuePage />} />
        <Route path="/:companyName/:year" element={<IncomeStatementPage />} />
      </Route>
    </Routes>
  );
}

export default App;
