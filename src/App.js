import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ScrollToTop from './ScrollToTop';
import BtnScrollToTop from './components/uti/BtnScrollToTop';
import NavigationBar from './components/NavigationBar/NavigationBar';

import Home from './components/Home';
import Footer from './components/Footer/Footer';
import Sobre from './components/Sobre/Sobre';
import Modelos from './components/Modelos/Modelos';
import Contato from './components/Contato/Contato';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavigationBar />
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/sobre' element={<Sobre/>} />
      <Route exact path='/modelos' element={<Modelos/>} />
      <Route exact path='/contato' element={<Contato/>} />
      </Routes>
      <BtnScrollToTop />
      <Footer />
    </Router>
  );
}

export default App;
