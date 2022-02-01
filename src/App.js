import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';
import './styles/header.css';
import './styles/app.css';
import './styles/homePage.css';
import './styles/categories.css';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={(<HomePage />)}
      />
      <Route
        path="/:Country"
        element={(<DetailsPage />)}
      />
    </Routes>
  );
}

export default App;
