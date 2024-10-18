import logo from './logo.svg';
import './App.css';
import UserTable from './tables/UserTable';
import { useState } from 'react';

function App() {

  const usersData =[
    {id: 1,name : "Elmer", userName:"Elmer1" },
    {id: 2,name : "Bryan", userName:"Bryan1" },
    {id: 3,name : "andres", userName:"Andres1" },
  ];
  //usuario predefinido
  const initialFormState = {id: null,name : "", userName:"" };

  //const [users, setUsers] = useState(usersData);
  //const {currentUser, setCurrentUser} = useState(initialFormState);   
  return (
   <div>
    <h1>CRUD DE USUARIO</h1>
    <UserTable/>
   </div>
  );
}

export default App;
