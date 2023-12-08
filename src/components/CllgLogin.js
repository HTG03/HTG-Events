import React from 'react'
import { Link } from 'react-router-dom'

function CllgLogin() {
  return (
    <>
    <div className='stu-login'>
    <div className='login-img'>
        <img src={require('../images/6.jpg')} alt='img1'  width={1000}/>
    </div>
    <div className='login-container'>
    <img src={require('../images/logo.png')} alt='Logo'/>
        <h2>Login to continue with <span className='head12'>HTG Events</span></h2>
        <form>
            <div className="margin">
                <label htmlFor="email" className="form-label">College Email address</label>
                <input type="email" className="form-control" id='email' name='email' placeholder='Enter Your Email Id'/>
            </div>
            <br />
            <div className="margin1">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" placeholder='Enter Your Password' id='password' name='password'/>
            </div>
            <br />
          <button type="submit" className="login-btn" >Login</button>
        </form>
        <br />
        <span className='forgot'><Link to='/forget'>Forgot Password?</Link></span>
        <p>Don't have an account ? <Link to='/CllgSign'>Sign up</Link></p>
        <p>OR</p>
        <div className='login-moreOpt'>
        <button tpe="submit" className="login-google" ><img src={require('../images/google.png')} alt="" className='google'/>Continue with Google</button> <br />
        <button type="submit" className="login-facebook" ><img src={require('../images/facebook.png')} alt="" className='facebook'/>Continue with Facebook</button>
        </div>
    </div>
   
    </div>
    </>
  )
}

export default CllgLogin
