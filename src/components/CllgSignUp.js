import React from 'react'
import { Link } from 'react-router-dom'

function CllgSignUp() {
  return (
    <>
     <div className='stu-SignUp'>
    <div className='signup-img'>
        <video width="600" height="400" autoPlay muted loop>
        <source src={require('../images/5.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>   
    <div className='signup-container'>
    <img src={require('../images/logo.png')} alt='Logo'/>
        <h2>Sign Up to continue with <span className='head12'>HTG Events</span></h2>
        <form>
            <div className="margin">
                <label htmlFor="Name" className="form-label">College Name</label>
                <input type="text" className="form-control" id='Name' name='Name' placeholder='Enter Your College Name'/>
            </div>
            <br />
            <div className="margin1">
                <label htmlFor="email" className="form-label">College Email address</label>
                <input type="email" className="form-control" placeholder='Enter Your College Email ID' id='email' name='email'/>
            </div>
            <br />
            <div className="margin1">
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" className="form-control" placeholder='Enter Your College Address' id='address' name='address'/>
            </div>
            <br />
            <div className="margin1">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" placeholder='Enter Your Password' id='password' name='password'/>
            </div>
            <br />
            <div className="margin1">
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" placeholder='Confirm Password' id='cpassword' name='cpassword'/>
            </div>
            <br />
          <button type="submit" className="signup-btn" >Sign Up</button>
        </form>
        <br />
        <p>Already've an account ? <Link to='/Cllglogin'>Login</Link></p>
        <p>OR</p>
        <div className='signup-moreOpt'>
        <button tpe="submit" className="signup-google" ><img src={require('../images/google.png')} alt="" className='google'/>Continue with Google</button> <br />
        <button type="submit" className="signup-facebook" ><img src={require('../images/facebook.png')} alt="" className='facebook'/>Continue with Facebook</button>
        </div>
    </div>
    </div>
    </>
  )
}

export default CllgSignUp
