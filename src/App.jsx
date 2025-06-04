
import './assets/styles/App.css';
import './assets/styles/Components.css';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Support from './pages/Support';
import AuthWrapper from './components/AuthWrapper';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <AuthWrapper>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </div>
      </Router>
    </AuthWrapper>
  );
}

export default App;