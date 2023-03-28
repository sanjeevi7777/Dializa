import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
export default function SignUp()  {
  const[patId,setPatId]=useState("");
  const[PatientName,setPatientName]=useState("");
  const[password,setPassword]=useState("");
  const[PatientAge,setPatientAge]=useState(0);
  const[sex,setSex]=useState("");
  const[patPhNo,setPatPhNo]=useState("");
  const[post,setPost]=useState();
  let navigate=useNavigate();
  async function validateUser(e){
    e.preventDefault();
    navigate('/patient/home');
    await axios.post("http://localhost:8080/patient",{
    patId:patId,
    patientName:PatientName,
    password:password,
    patientage:PatientAge,
    sex:sex,
    patPhNo:patPhNo
    }
    )
    alert("success");
    setPatId();
setPatientName();
setPassword();
setPatientAge();
setSex();
setPatPhNo();

}
    return (
      <form>
        <h3>Patient Sign Up</h3>

        

        <div className="mb-3">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="Name" 
          value={PatientName}
            onChange={(e)=>setPatientName(e.target.value)}

          />
        </div>
        <div className="mb-3">
          <label>Patient Age</label>
          <input type="number" className="form-control" placeholder="Patient Age"
           value={PatientAge}
            onChange={(e)=>setPatientAge(e.target.value)}
           />
        </div>
        <div className="mb-3">
          <label>Sex</label>
          <input type="text" className="form-control" placeholder="Sex" 
           value={sex}
            onChange={(e)=>setSex(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Patient PhoneNumber</label>
          <input
            type="text"
            className="form-control"
            placeholder="Patient Address"
            value={patPhNo}
            onChange={(e)=>setPatPhNo(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={validateUser}>
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }
