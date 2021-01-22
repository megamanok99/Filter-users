import React from 'react';
import UsersList from './components/UsersList';

import profile from './profile.json';
import Profile from './components/profile';
import axios from 'axios';
import { Link } from 'react-router-dom';


function App() {
  const [cards,setCards]=React.useState([]);
 const [value,setValue]=React.useState('');
 
const [page,Setpage]=React.useState(1);
 const [isEnd,setEnd]=React.useState(false);
 const [load,setLoad]=React.useState(false);

 const url=`https://5c3755177820ff0014d92711.mockapi.io/users?page=${page}&limit=10`;


 const getUsers=async()=>{
  setLoad(true);
   
   const {data} =await  axios.get(url)
   
   if(data.length){
    setCards( prevCards=>[...prevCards,...data]);
   }else{
     setEnd(true);
   }
   setLoad(false);
 }
  
  

  function updateUrl(){
    console.log(page);
    Setpage(page+1);
    
  }

  
React.useEffect(() => {
  
  getUsers();
  
},[page]);


  return (
   
     <div className="app">
       <input type="text" placeholder="search" onChange={(e)=>setValue(e.target.value)}/>
       {load && 
       <center> <h3>Loading...</h3></center>
      }
       {!load && <UsersList users={cards} value={value} />}

       {!isEnd && <button onClick={updateUrl}>next user</button>}

     </div>

     
    
     
      
      
   
  );
}

export default App;
