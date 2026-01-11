import React,{useEffect, useState} from 'react'
import './Authentication.css'
import axios from 'axios';
function Login() {
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [successAlert, setSuccessAlert] = useState(false)
  const [alerts , setAlert] = useState('')
  const [dangerAlert, setDangerAlert] = useState(false)
 useEffect(()=>{
  const timer = setTimeout(() => {
    setSuccessAlert(false)
    setDangerAlert(false)
  }, 4000);
 })
  const handleform = async (e)=>{
      e.preventDefault();
      try{
     const res = await axios.post("http://localhost:9000/authentication/login",{
     email: loginEmail,
     password: loginPassword
     })
     setAlert(res.data.message)
     setSuccessAlert(true)
     localStorage.setItem('token', res.data.token)
    }catch(err){
      setAlert(err.response?.data.message)
      setDangerAlert(true)
    }
  }

  return (
    <>
     {successAlert && <div className="alert alert-primary" role="alert">
  {alerts}
    </div>}
  
{dangerAlert &&<div className="alert alert-danger" role="alert">
  {alerts} </div>}
    <div className="body">
  <div className="Logincontainer">
    <form onSubmit={handleform}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> setLoginEmail(e.target.value)}style={{border:loginEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginEmail)?'2px solid red':''}} />
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=> setLoginPassword(e.target.value)}/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

</div>
<div className="spantextlogin">BuyLoom</div>
 </div>
    </>
  )
}

export default Login
