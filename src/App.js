import { useState } from 'react';
import {data} from './Components/Data';
import Dashboard from './Components/Dashboard';
import './App.css';
import Students from './Components/Students';
import {Routes, Route} from 'react-router-dom';
import AddStudents from './Components/AddStudents';
import EditStudents from './Components/EditStudents';
import NoPage from './Components/NoPage';
import Instructions from './Components/Instructions/Instructions';

function App() {

const [students, setStudents] = useState(data);
  return (
    <Routes>
      
      <Route exact path="/" element={<Dashboard />} />
      <Route path="/students" element={<Students students = {students} setStudents = {setStudents} />} />
      <Route path="/create-student" element={<AddStudents students = {students} setStudents = {setStudents} />} />
      <Route path="/edit-student/:id" element={<EditStudents students = {students} setStudents = {setStudents} />} />
      <Route path="/instructions" element={<Instructions />} />
      <Route path="*" element={<NoPage />} />
   
    </Routes>
  );
}

export default App;
