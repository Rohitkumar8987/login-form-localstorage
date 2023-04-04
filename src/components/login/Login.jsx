import React, {useRef, useEffect,useState} from 'react'
// import './Loginform.css';
import '../login/login.css'
import img from '../../assets/img090.png';
// import Dashboard from '../../Dashboard';
// import Sidebars from './dashboard/Sidebars'; 
import { useNavigate } from 'react-router-dom';

function Loginform() {

  const name=useRef()
  const email=useRef()
  const password=useRef()
   const[showDashboard,setShowDashboard]=useState(false)
   const[show,setShow]=useState(false)
const localLogin=localStorage.getItem("login")
const localEmail=localStorage.getItem("email")
const localName=localStorage.getItem("name")
const navigate = useNavigate()
const localPassword=localStorage.getItem("password")

  useEffect(()=>{
    if(localLogin){
      setShowDashboard(true)
    }
    if(localEmail){
      setShow(true)
    }
  })
  const handleClick=(e)=>{
    e.preventDefault();
    if(name.current.value &&email.current.value &&password.current.value)
    // console.log(name.current.value ,email.current.value ,password.current.value)
    {
      localStorage.setItem("name",name.current.value)
      localStorage.setItem("email",email.current.value)
      localStorage.setItem("password",password.current.value)
      localStorage.setItem("login",email.current.value)
      alert("successfully !!")
      window.location.reload()
    }
  }
   const handleSignIn=()=>{
    if(email.current.value==localEmail &&password.current.value==localPassword)
    {
      localStorage.setItem("login",email.current.value)
      navigate('/sidebars')
      window.location.reload()
    }
    else{
      alert("please Enter valid Email And Password ")
    }
   }
   
   

  return (
   <section>
    <div className='login'>
      {/* {showDashboard? <Sidebars/>: */}
      {show?
        (<div className='col-1'>
            <h2>Butler Lighting</h2>
            <span>Family owned since 1948</span>

            <div className='header'>Welcome Back!</div>
            <form id ='form'className='flex flex-col'>
            <div className="content">
        <div className="input-box">
          <label for="name">Email Address</label>
          <input type="text" placeholder='Enter your email' ref={email} />
        </div>
        <div className="input-box_0">
          <label for="name">password</label>
          <input type="Password" placeholder='********' ref={password} />
        </div>
        </div>
        <div className='forgot'>
            <a href="#"class="text">Forgot password?</a>
           </div>
        <button className='btn'onClick={handleSignIn}>Login</button>
            </form>
        </div>)
        :
       (<div className='col-1'>
        <h2>Butler Lighting</h2>
        <span>Family owned since 1948</span>

        <div className='header'>Welcome Back!</div>
        <form id ='form'className='flex flex-col'>
        <div className="content">
    <div className="input-box">
      <label for="name">Name</label>
      <input type="text" placeholder='Enter your Name' ref={name} />
    </div>
    <div className="input-box">
      <label for="name">Email Address</label>
      <input type="text" placeholder='Enter your Email' ref={email} />
    </div>
    <div className="input-box_0">
      <label for="name">password</label>
      <input type="Password" placeholder='*******' ref={password} />
    </div>
    </div>
    <div className='forgot'>
        <a href="#"class="text">Forgot password?</a>
       </div>
    <button className='btn'onClick={handleClick}>Login</button>
        </form>
    </div>)
        }
        <div className='col-2'>
            <img src={img} alt=''/>
        </div>
    </div>
   </section>
  )
}

export default Loginform;