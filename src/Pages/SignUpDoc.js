import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function SignUpDoc() {
  const [gender, setGender] = useState("");
  const navigate = useNavigate();
  const [doctorName, setdoctorName] = useState("");
  const [specialist, setSpecialist] = useState("");
  const [password, setPassword] = useState("");
  const [phNo, setPhNo] = useState();
  const [hosId, setHosId] = useState(1);
  const [docId, setDocId] = useState(1);
  const [doctors, setDoctors] = useState({});
  const [hospitals, setHospitals] = useState([]);
  const [error, setError] = useState();
  async function validateUser(e) {
    e.preventDefault();
    await axios.post("http://localhost:8080/doctor", {
      docId: docId,
      doctorName: doctorName,
      specialist: specialist,
      password: password,
      gender: gender,
      phNo: phNo,
      hosId: hosId,
    });
    alert("success");
    navigate("/doctor/home");

    // .then(response=>{
    //     console.log(response.data);
    // })
  }
  useEffect(() => {
    axios.get("http://localhost:8080/hospital").then((response) => {
      setHospitals(response.data);
      console.log(response.data);
    });
  }, []);
  async function validate(id) {
    await axios
      .get(`http://localhost:8080/doctor/${docId}`)
      .then((response) => {
        setDoctors(response.data);
        console.log(doctors);
      });
  }
  return (
    <form>
      <h3>Docter Sign Up</h3>

      <div className="mb-3">
        <label>Doctor Id</label>
        <input
          type="number"
          className="form-control"
          placeholder="Doctor Id"
          value={docId}
          onChange={(e) => {
            // validate(docId);
            setDocId(e.target.value);
            console.log(docId);
            // if (doctors.docId != docId) {
            //   setError("User Id is taken");
            // } else {
            //   setError("User Id is not taken");
            // }
          }}
        />
      </div>
      <p>{error}</p>
      <div className="mb-3">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={doctorName}
          onChange={(e) => {
            setdoctorName(e.target.value);
            console.log(doctorName);
          }}
        />
      </div>

      <div className="mb-3">
        <label>Gender</label>
        <input
          type="text"
          className="form-control"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Hospital</label>
        <select
          className="form-control"
          value={hosId}
          onChange={(e) => {
            setHosId(e.target.value);
            console.log(hosId);
          }}
        >
          {hospitals.map((e) => (
            <option
              value={e.hosId}
              onChange={(e) => {
                setHosId(e.target.value);
              }}
              style={{ color: "black" }}
            >
              {e.hosName}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label>Specialist</label>
        <input
          type="text"
          className="form-control"
          placeholder="Specialist"
          value={specialist}
          onChange={(e) => setSpecialist(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Phone No</label>
        <input
          type="number"
          className="form-control"
          placeholder="Phone Number"
          value={phNo}
          onChange={(e) => setPhNo(e.target.value)}
        />
      </div>

      <div className="d-grid">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={validateUser}
        >
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <Link to="/doctor/signin">sign in?</Link>
      </p>
    </form>
  );
}
