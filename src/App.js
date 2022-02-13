import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';
import './styles/header.css';
import './styles/app.css';
import './styles/homePage.css';
import './styles/countries.css';
import './styles/detailsPage.css';
import './styles/footer.css';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={(<HomePage />)}
      />
      <Route
        path="details/:Country"
        element={(<DetailsPage />)}
      />
    </Routes>
  );
}

export default App;
