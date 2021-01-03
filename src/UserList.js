import React,{useState,useEffect} from 'react'
import axios from'axios';
import Card from './Card';
import "./Style.css";
// import {Container,Row} from 'reactstrap'
// import { Redirect } from 'react-router-dom'

function ListUsers({isLogin}) {
   const [users, setUsers] = useState([{}]) 

  useEffect(()=>{
   const fetchData=()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>setUsers(res.data))
    .catch(err=>console.log(err))
   }
   fetchData()
  },[])
  

   return(

    <div className="card-container">
 
   {users.map((user,i)=><Card user={user} key={i} />)}

  </div>

   )
   }
    
      


export default ListUsers;