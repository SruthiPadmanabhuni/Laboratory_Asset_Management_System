import React,{useState} from 'react'
import './StudentLogin.css'
import {Link} from 'react-router-dom'
import Navbar1 from '../Navbar1';

const StudentLogin = () => {
  const [data,setData] = useState({
    susername :'',
    spassword :''
  });
  const {susername,spassword} = data;
  const changeHandler = e => {
    setData({...data,[e.target.name]:e.target.value})
  };
  const submitHandler = e => {
    e.preventDefault()
    console.log(data)
  };

  const loginHandler = (e) => {
    e.preventDefault()
    loginCall()
  }

  const loginCall = async () => {
    try {
      if(!susername || !spassword) {
        alert('Please enter all the fields')
        return
      }

      let url = 'http://localhost:5000/api/student/' + susername
      const response = await fetch(url,{
        method:'GET',
        headers:{'Content-Type':'application/json'}
      })
      
      console.log(response)

      const jsonData = await response.json()

      if(jsonData.password === spassword) {
        console.log('Login Successful')
        document.cookie = "username=" + susername
        window.location.href = '/StudentPageOne'
      }
      else {
        alert('Invalid Credentials')
      }
    }
    catch(err) {
      alert('invalid credentials')
      console.log(err)
    }
  };

  return (
    <div>
      <Navbar1 />
      <div className='body p-5'>
        <div className="container" style={{marginTop:'50px'}}>
          <h2>Student Login</h2>
          <hr/>
          <form onSubmit={submitHandler}>
              <div className="form-group">
                <label htmlFor="susername">Username</label>
                <input
                    type="text"
                    name="susername"
                    value={susername}
                    onChange={changeHandler}
                    placeholder="Enter your username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="spassword">Password</label>
                <input
                    type="password"
                    name="spassword"
                    value={spassword}
                    onChange={changeHandler}
                    placeholder="Enter your password"
                />
              </div>
              <div className='d-flex justify-content-center'>
                <Link to='/StudentPageOne'>
                  <button type="submit" className="butt" onClick={loginHandler}>
                    Login
                  </button>
                </Link>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default StudentLogin;