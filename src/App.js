import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import Contact from './pages/contact/Contact';
import SignIn from './pages/signIn/SignIn';

function App() {
  return (
    <BrowserRouter basename='/igrow'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
