import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Update() {

  const navigate = useNavigate()
  const [id, setId] = useState(0)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  useEffect(()=>{
     setId(localStorage.getItem("id"))
     setName(localStorage.getItem("name"))
     setEmail(localStorage.getItem("email"))
     setPassword(localStorage.getItem("password"))
  },[])

  const handleUpdate= (e)=>{
    e.preventDefault()
    axios.put(`https://66f1c3ec4153791915520ae8.mockapi.io/crud/${id}`, {
      name : name,
      email : email,
      password : password
    })
    .then(()=>{
        navigate("/read")
    })
    .catch((error)=>{
      console.log(error , "Error")
    })
  }
  return (
    <>
    <h1 className='text-center m-4'>Update User</h1>

    
      <form className='container' onSubmit={handleUpdate}>
  <div className="mb-3">
    <label  className="form-label">Name:</label>

    <input type="text" className="form-control" name='name' value={name} onChange={(e)=>setName(e.target.value)}  />
   
  </div>
  <div className="mb-3">
    <label  className="form-label">Email:</label>

    <input type="email" className="form-control" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}  />
  </div>
  <div className="mb-3">
    <label  className="form-label">Password:</label>

    <input type="password" className="form-control" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
  </div>
  <button type='submit' className="btn btn-primary mx-2">Submit</button>
  <Link  to="/read" className="btn btn-primary">Back</Link>
</form>
      
    </>
  )
}

export default Update
