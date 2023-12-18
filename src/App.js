import './App.css';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from './components/SignUp';
import Home from './components/Home';
import Forget from './components/Forget';
import CllgSignUp from './components/CllgSignUp';
import CllgLogin from './components/CllgLogin';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/Cllglogin" element={<CllgLogin/>} />
      <Route exact path="/sign" element={<SignUp/>} />
      <Route exact path="/CllgSign" element={<CllgSignUp/>} />
      <Route exact path="/forget" element={<Forget/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
