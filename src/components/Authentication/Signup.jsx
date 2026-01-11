import React,{useState, useEffect} from 'react'
import './Authentication.css'
import axios from 'axios'

function Signup() {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [formDisplay, setFormDisplay] = useState(false)
  const [VerifyCode, setVerifyCode] = useState('')
  const [alerts , setAlert] = useState('')
  const [successAlert, setSuccessAlert] = useState(false)
  const [dangerAlert, setDangerAlert] = useState(false)
  const[countsecond, SetCountSecond] = useState(320)
 
  const handlesubmit = async (e)=>{
    e.preventDefault();
    try{
    const res = await axios.post('http://localhost:9000/authentication/signup',{
      name,
      email,
      password
    })
    setAlert(res.data.message)
     setSuccessAlert(true)
    
    }catch(err){
      setAlert(err.response?.data.message || "Something went wrong")
      setDangerAlert(true)
    }
      
  }
  useEffect(()=>{
      const timer = setTimeout(() => {
      setSuccessAlert(false)
      setDangerAlert(false)
        
      }, 5000);
      return ()=> clearTimeout(timer)
    },[alerts])
  const handleformdisplay = ()=>{
    if(name !=="" && email !=='' && password.length !==''){
    setFormDisplay(true)}
  }
  const handleVerifyCode = async()=>{
    try{
    const response = await axios.post('http://localhost:9000/authentication/verifyEmail',{
      code:VerifyCode
      })
      alert(response.data.message)
      localStorage.setItem("verify",true)
    }catch(err){
      alert(err.response?.data.message)
    }

  }
  useEffect(()=>{
    if(!formDisplay) return;
    const intervel = setInterval(() => {
     SetCountSecond(prev => {
      if(prev <= 0){
        clearInterval(intervel);
        setFormDisplay(null)
        return prev;
      }
      return prev - 1
     })
    }, 1000)
    
  },[formDisplay])
  
  return (
    <>
   {successAlert && <div className="alert alert-primary" role="alert">
  {alerts}
    </div>}
  
{dangerAlert &&<div className="alert alert-danger" role="alert">
  {alerts}
</div>}

    <div className="body">
  <div className="Logincontainer">
    <form onSubmit={handlesubmit}>
       <div className="form-group">
    <label htmlFor="exampleInputName">Name</label>
    <input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" onChange={(e)=>setName(e.target.value)} minLength={3}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> setEmail(e.target.value)} style={{border:email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)?'2px solid red':''}}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)}/>
  </div>
 
  <button type="submit" className="btn btn-primary" onClick={handleformdisplay}>Submit</button>
  {formDisplay && <div className="form-group">
    <label htmlFor="exampleInputverifypassword">Verify Code</label>
    <input type="password" className="form-control" id="exampleInputverifypassword" onChange={(e)=> setVerifyCode(e.target.value)} />
    <button type='button' onClick={handleVerifyCode} className="btn btn-primary">Verify</button>
    <span  className="form-group">Enter code within 5 minutes! {countsecond}</span>
  </div>}
</form>
</div>
<div className="spantextlogin">BuyLoom</div>
 </div>

    </>
  )
}

export default Signup
