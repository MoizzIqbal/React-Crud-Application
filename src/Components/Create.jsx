import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';

function Create() {

    const Navigate = useNavigate()
    const [Data, setData] = useState({
        name : "",
        email : "", 
        password : ""
    })

    function Submit(e){
        e.preventDefault();
       console.log(Data)

       axios.post("https://66f1c3ec4153791915520ae8.mockapi.io/crud" , Data)
       .then(()=>{

           Navigate("/read")
       })
       .catch((error)=>{
        console.log(error , "Error")
      })
       
    }


    function handleInput(e){
        const {name, value} = e.target ;

        setData((prev) => {
            return { ...prev, [name]: value }
          })
    }
  return (
    <>
    <h1 className='text-center m-4'>Create User</h1>

    
      <form className='container' onSubmit={Submit}>
  <div className="mb-3">
    <label  className="form-label">Name:</label>

    <input type="text" className="form-control" name='name' value={Data.name}  onChange={handleInput} />
   
  </div>
  <div className="mb-3">
    <label  className="form-label">Email:</label>

    <input type="email" className="form-control" name='email' value={Data.email}  onChange={handleInput} />
  </div>
  <div className="mb-3">
    <label  className="form-label">Password:</label>

    <input type="password" className="form-control" name='password' value={Data.password}  onChange={handleInput} />
  </div>
  <button type='submit' className="btn btn-primary mx-2">Submit</button>
  <Link  to="/read" className="btn btn-primary">Back</Link>
</form>
      
    </>
  )
}

export default Create
