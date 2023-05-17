import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './ScrollToTop';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavigationBar />
      <Routes>

      </Routes>
    </Router>
  );
}

export default App;
