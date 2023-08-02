import React from 'react';
import { useState, useEffect } from 'react';
import {useNavigate, useParams } from 'react-router-dom';
import Base from '../Base';

function EditStudents({students, studId, setStudents}) {

    const {id} = useParams();
    const navigate = useNavigate();

    //Defining the Students States
    const[profile, setProfile] = useState('');
    const [ID, setID] = useState('');
    const [name, setName] = useState('');
    const [batch, setBatch] = useState('');
    const [education, setEducation] = useState('');
    const [gender, setGender] = useState('');
    const [skills, setSkills] = useState('');

   useEffect(()=>{

    const studentData = students.find(stud => stud.ID === id);
     //console.log(studentData);

    //Displaying The details need to be edited on the Update fields screen 
    if(studentData){       //if StudentData is there then only dispaly the details in update screen
        setProfile(studentData.profile);
        setID(studentData.ID);
        setName(studentData.name);
        setBatch(studentData.batch);
        setEducation(studentData.education);
        setGender(studentData.gender);
        setSkills(studentData.skills);
     }

   }, [id, students]) //useeffect will activate first time after rendering & then whenever the dependency array values changes


   const updateStudent = (e)=>{
    e.preventDefault();

    const studIndex = students.findIndex((stud)=> stud.ID === id)

    const editedStudent = {
     profile,
     ID,
     name,
     batch,
     education,
     gender,
     skills
    }

    students[studIndex] = editedStudent;

    setStudents([...students]);
    navigate("/students");
   }

    return (
        <Base title = {"Edit Student"} description = {"Edit the students details here"}>
        
        <div>
            <h2 className="App">Update Student Details</h2>
            <form className="form-cls">
                <div className="form-group mx-sm-3 mb-2 inp-bar">

                <div className="wrapper">
                    <label for="profile" id="profile">Choose Profile</label><br></br>
                    <input type="radio" id="male1" name="profile" value="male1" onChange={(e)=>setProfile(e.target.value + '.jpg')}></input>
                    <label for="male1">male1</label>
                    <input type="radio" id="male2" name="profile" value="male2" onChange={(e)=>setProfile(e.target.value + '.jpg')}></input>
                    <label for="male2">male2</label>
                    <input type="radio" id="male3" name="profile" value="male3" onChange={(e)=>setProfile(e.target.value + '.jpg')}></input>
                    <label for="male3">male3</label>
                    <input type="radio" id="male4" name="profile" value="male4" onChange={(e)=>setProfile(e.target.value + '.jpg')}></input>
                    <label for="male4">male4</label><br></br>
                    <input type="radio" id="female1" name="profile" value="female1" onChange={(e)=>setProfile(e.target.value + '.jpg')}></input>
                    <label for="female1">female1</label>
                    <input type="radio" id="female2" name="profile" value="female2" onChange={(e)=>setProfile(e.target.value + '.jpg')}></input>
                    <label for="female2">female2</label>
                    <input type="radio" id="female3" name="profile" value="female3" onChange={(e)=>setProfile(e.target.value + '.jpg')}></input>
                    <label for="female3">female3</label>
                    <input type="radio" id="female4" name="profile" value="female4" onChange={(e)=>setProfile(e.target.value + '.jpg')}></input>
                    <label for="female4">female4</label>
                    </div>

                    <label for="ID">Student ID</label>
                    <input className="form-control "  placeholder="Enter Id" value={ID} id="ID" onChange={(e)=>setID(e.target.value)} required></input>
                    <label for="name">Name</label>
                    <input className="form-control"  placeholder="Enter Name" value={name} id="name" onChange={(e)=>setName(e.target.value)} required></input>
                    <label for="batch">Batch</label>
                    <input className="form-control"  placeholder="Enter Batch" value={batch} id="batch" onChange={(e)=>setBatch(e.target.value)} required></input>
                    <label for="education">Education</label>
                    <input className="form-control"  placeholder="Enter Education" value={education} id="education" onChange={(e)=>setEducation(e.target.value)} required></input>
                    <label for="gender">Gender</label>
                    <input className="form-control"  placeholder="Enter Gender" value={gender} id="gender" onChange={(e)=>setGender(e.target.value)} required></input>
                    <label for="skills">Skills</label>
                    <input className="form-control"  placeholder="Enter Skills" value={skills} id="skills" onChange={(e)=>setSkills(e.target.value)} required></input>
                    <div className="nav-btn-group">
                        <button className="btn btn-primary" onClick={(e)=>updateStudent(e)}>Update</button>
                    </div>
                </div>
            </form>
        </div>
        </Base>
    );
}

export default EditStudents;