import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

  // Define an array of routes where the Navbar should be hidden
  const hiddenRoutes = ['/login', '/Cllglogin', '/sign', '/CllgSign', '/forget'];

  // Get the current route
  const currentRoute = window.location.pathname;

  // Check if the Navbar should be hidden based on the current route
  const isNavbarHidden = hiddenRoutes.includes(currentRoute);

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    if (event.target.value === '0') {
      navigate('/login');
    } else if (event.target.value === '1') {
      navigate('/Cllglogin');
    }
  };
  return isNavbarHidden ? null : (
    <>
    <div className='navbar-container'>
      <div className="navbar-contain1">
        <img src={require("../images/logo.png")} alt="" />
        <div className="logo-name">
            <div className="first">HTG Events</div>
            <div className="second">Events, Elevated</div>
        </div>
      </div>
      <div className="navbar-contain2">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>
            <div className="dropdown">
                <button className='dropbtn'>Events</button>
                <div className="dropdown-content">
                    <Link to="#">Annual Function</Link>
                    <Link to="#">Fresher's Party</Link>
                    <Link to="#">Farewell Party</Link>
                    <Link to="#">Coporate Event</Link>
                    <Link to="#">Art & Fun</Link>
                    <Link to="#">Seminar/Webinar</Link>
                </div>
            </div>
            </li>
            <li>Exclusive Details</li>
            <li>Contact Us</li>
        </ul>
      </div>
      <div className="navbar-contain3">
        <select name="lgn" id="login" onChange={handleSelectChange} value={selectedOption}>
            <option value="" disabled hidden>My Account</option>
            <option value="0">Student</option>
            <option value="1">University</option>
        </select>
      </div>
    </div>
    </>
  )
}

export default Navbar
