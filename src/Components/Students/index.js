import React from 'react';
import Base from '../Base';
// import AddStudents from '../AddStudents';
// import EditStudents from '../EditStudents';
// import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Students({students, setStudents}) {

    // const [studId, setStudId] = useState("");
    const navigate = useNavigate();

const deleteStudents = (studentId)=>{
    const resultStudent = students.filter((student)=> studentId !== student.ID);
    setStudents(resultStudent);
}
    return (
        <Base title = {"Students Info"} description = {"All Students info will be displayed here"}>
        <div className="stud-collection">
            {students.map((stud, idx)=>(
                
                    <div className="card card-style" style={{width: "18rem", backgroundColor: "rgb(136, 129, 129)"}} key={idx}>
                    <img className="card-img-top card-profile-img" src={`images/${stud.profile}`} alt={stud.name} />
                    <div className="card-body">
                    <h4 className="card-title card-name">{stud.name}</h4>
                    <p className="card-text"><b>BATCH:</b> {stud.batch}</p>
                    <p className="card-text"><b>EDUCATION:</b> {stud.education}</p>
                    <p className="card-text"><b>SKILLS:</b> {stud.skills}</p>
                    <p className="card-text"><b>GENDER:</b> {stud.gender}</p>
                    <div className="card-btn-grp">
                    <button className="btn btn-light" onClick={()=>navigate(`/edit-student/${stud.ID}`)}>Edit</button>
                    <button className="btn btn-light" onClick={()=>deleteStudents(stud.ID)}>Delete</button>
                    </div>
                    </div>
                    </div>          
            
            ))}
        </div>
        {/* <AddStudents students = {students} setStudents = {setStudents} />
        <EditStudents students = {students} studId = {studId} setStudents = {setStudents} /> */} 
        </Base>
        
    );
}

export default Students;