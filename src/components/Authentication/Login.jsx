import React,{useState} from 'react'
import './Authentication.css'
import axios from 'axios';
function Login() {
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const handleform = async (e)=>{
      e.preventDefault();
      try{
     const res = await axios.post("http://localhost:9000/authentication/login",{
     email: loginEmail,
     password: loginPassword
     })
     alert(res.data.message)
    }catch(err){
      alert(err.response?.data.message)
    }
  }
  return (
    <>
    <div className="body">
  <div className="Logincontainer">
    <form onSubmit={handleform}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> setLoginEmail(e.target.value)}/>
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
