//import { useRef, useState } from "react"
import { useAuth } from "./context/Authuntication"
import React, { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"



function Login() {
    //const[email , setEmail] = useState('Manu@example.com')
    //const[password , setPassword] = useState('Password')
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const nameRef = useRef(null)
    const {login , isAuthenticated , FirstName} = useAuth()
    const navigate = useNavigate();


    function handleSubmit(e){
        e.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const name = nameRef.current.value
        if(email && password)
        console.log(email ,password)
        login(email , password)
        FirstName(name)
    }
    useEffect(function(){
        if(isAuthenticated) 
         navigate('/App',{replace:true})
        },[isAuthenticated,navigate])

  return (
  <main>
    <form onSubmit={handleSubmit}>
    <div >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            ref={nameRef}
            //onChange={(e) => setEmail(e.target.value)}
            //value={email}
          />
        </div>
    <div >
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            //onChange={(e) => setEmail(e.target.value)}
            //value={email}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            ref={passwordRef}
            //onChange={(e) => setPassword(e.target.value)}
            //value={password}
          />
        </div>

        <div>
          <button type="submit">Login</button>
        </div>
    </form>
  </main>
  )
}

export default React.memo(Login);