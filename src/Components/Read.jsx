import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Read() {
    const [read, setRead] = useState([])

   async function getdata(){
            const response =await axios.get("https://66f1c3ec4153791915520ae8.mockapi.io/crud")
            console.log(response)
            setRead(response.data)
            
           
    }

    function del(id){
      
        axios.delete(`https://66f1c3ec4153791915520ae8.mockapi.io/crud/${id}`)
        .then(()=>{
            getdata()
        })
        .catch((error)=>{
          console.log(error , "Error")
        })
    }

    function setToLocalStorage(id, name, email, password){
          localStorage.setItem('id', id);
          localStorage.setItem('name', name);
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
    }
   


    useEffect(()=>{
            getdata()
    }, [])
  return (
    <div className='container'>
      <h1 className='text-center m-4'>Read</h1>

      <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col"></th>
      <th scope="col"><Link className='btn btn-primary' to='/'>Create User</Link></th>
    </tr>
  </thead>
  <tbody>

    {
        read.map((item , index)=>{
            return (
                <tr key={index}>
            <th scope="row">{item.id}</th>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td><Link to="/update"><button className='btn btn-success' onClick={()=>setToLocalStorage(item.id, item.name, item.email, item.password)}>Edit</button></Link></td> 
            
            <td><button className='btn btn-danger' onClick={()=>{ if(window.confirm("are you sure")){del(item.id)}}} >Delete</button></td>
          </tr>
            )
        })
    }
   
   
  </tbody>
</table>
    </div>
  )
}

export default Read
