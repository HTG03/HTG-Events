import React from 'react'

function Forget() {
  return (
    <>
    <div className='stu-login'>
    <div className='login-container'>
    <img src={require('../images/logo.png')} alt='Logo'/>
        <h2>Forget Password</h2>
        <form>
            <div className="margin">
            <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" placeholder='Enter Your Password' id='password' name='password'/>
            </div>
            <br />
            <div className="margin1">
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" placeholder='Confirm Password' id='cpassword' name='cpassword'/>
            </div>
            <br />
          <button type="submit" className="login-btn" >Set Password</button>
        </form>
        <br />
    </div>
    <div className='login-img'>
        <img src={require('../images/1.jpg')} alt='img1'width={1100}/>
    </div>
    </div>
    </>
  )
}

export default Forget
