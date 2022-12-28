import { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import { Add } from './Add';
import { Delete } from './Delete';
import { Edit } from './Edit';
import { EditDetails } from './EditDetails';
import { Home } from './Home';
import { Navigation } from './Navigation';
import { User } from './Home'

const initialUserList = [
  {
    name: 'Abisheik',
    age: 23,
    gender: 'Male',
  },
  {
    name: 'Kishor',
    age: 29,
    gender: 'Male',
  },
  {
    name: 'Rajalakshmi',
    age: 23,
    gender: 'Female',
  },
  {
    name: 'Vishva',
    age: 25,
    gender: 'Male',
  },
  {
    name: 'Bharath',
    age: 30,
    gender: 'Male',
  },

  {
    name: 'Swetha',
    age: 20,
    gender: 'Female',
  },
  {
    name: 'Vimal',
    age: 46,
    gender: 'Male',
  },
  {
    name: 'Akshaya',
    age: 12,
    gender: 'Female',
  },
  {
    name: 'Selva',
    age: 27,
    gender: 'male',
  },
  {
    name: 'Harish',
    age: 32,
    gender: 'Male',
  },
  {
    name: 'Balakrishnan',
    age: 25,
    gender: 'Male',
  },
  {
    name: 'Indrajith',
    age: 48,
    gender: 'Male',
  }
];

function App() {

  const navigate = useNavigate();
  const [userList, setUserList] = useState(initialUserList);

  function handleAdd(name, age, gender) {
    let newUser = {
      name: name,
      age: age,
      gender: gender
    }
    setUserList([...userList, newUser])
    navigate('/users');
  }

  function handleDelete(id) {
    userList.splice(id, 1);
    setUserList(userList);
    navigate('/users');
  }

  function handleEdit(name, age, gender, id) {
    let editedUser = {
      name: name,
      age: age,
      gender: gender
    }
    userList.splice(id, 1, editedUser)
    setUserList(userList);
    navigate('/users');
  }

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Home userList={userList} />} />
        <Route path="/add-user" element={<Add handleAdd={handleAdd} />} />
        <Route path="/delete-user" element={<Delete handleDelete={handleDelete} count={userList.length} />} />
        <Route path="/edit-user" element={<Edit count={userList.length} />} />
        <Route path="/edit/:id" element={<EditDetails handleEdit={handleEdit} userList={userList} />} />
        <Route path="/users/user/:id" element={<User userList={userList} />} />
      </Routes>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Welcome to CRUD APP on Users List.</h1>
      <p>This App allows us to Create, Read, Update and Delete the userlist.</p>
    </div>
  );
}

export default App;
