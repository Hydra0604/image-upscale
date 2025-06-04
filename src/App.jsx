
import './assets/styles/App.css';
import './assets/styles/Components.css';
import Home from './pages/Home';
import AuthWrapper from './components/AuthWrapper';

function App() {
  return (
    <AuthWrapper>
      <div className="app">
        <Home />
      </div>
    </AuthWrapper>
  );
}

export default App;