import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import Contact from './pages/contact/Contact';
import SignIn from './pages/signIn/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/' element={<AboutUs />} />
        <Route exact path='/' element={<Contact />} />
        <Route exact path='/' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
