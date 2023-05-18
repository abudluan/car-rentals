import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollToTop from './ScrollToTop';
import NavigationBar from './components/NavigationBar/NavigationBar';

import Home from './components/Home';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavigationBar />
      <Routes>
      <Route exact path='/' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
