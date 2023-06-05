import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Specialties from "./components/Specialties";
import Login from "./components/Login"
import Aboutus from './components/Aboutus';
import Signup from "./components/Signup";
import FooterNavbar from './components/FooterNavbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/contact' element = {<Contact/>}/>
          <Route path='/specialties' element = {<Specialties/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/aboutus' element = {<Aboutus/>}/>
          <Route path='/signup' element = {<Signup/>}/>
        </Routes>
        <FooterNavbar/>
      </Router>
    </div>
  );
}

export default App;
