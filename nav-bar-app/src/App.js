import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Home from './components/home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <nav id='nav'>
          <div> <Link id="home" to={'/'}><h1>Kalvium❣️</h1></Link></div>
         <div> <Link to={'/contact'} className='contact'> <p>Contacts</p></Link> <Link to={'/about'} className='about'> <p>About</p></Link></div>
        </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
