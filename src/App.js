import Header from './components/Header';
import './styles/header.css';
import './styles/app.css';

function App() {
  const heading = 'COVID19 statestics';
  return (
    <div className="App">
      <Header heading={heading} />
    </div>
  );
}

export default App;
