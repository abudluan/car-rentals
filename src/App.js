import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollToTop from './ScrollToTop';
import BtnScrollToTop from './components/uti/BtnScrollToTop';
import NavigationBar from './components/NavigationBar/NavigationBar';

import Home from './components/Home';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavigationBar />
      <Routes>
      <Route exact path='/' element={<Home/>} />
      </Routes>
      <BtnScrollToTop />
      <Footer />
    </Router>
  );
}

export default App;
