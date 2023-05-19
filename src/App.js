import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollToTop from './ScrollToTop';
import BtnScrollToTop from './components/uti/BtnScrollToTop';
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
      <BtnScrollToTop />
    </Router>
  );
}

export default App;
