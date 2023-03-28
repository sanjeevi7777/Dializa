import React, { useState, useEffect } from "react";
import PatientNavBar from "../Components/PatientNavBar";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

// CSS FILES
import styles from "../Styles/Patients.module.css";
import axios from "axios";
// import styles from "../Styles/Doctors.module.css"

function Hospitals() {
  let id = 40;
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/hospital").then((response) => {
      setHospitals(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <PatientNavBar />
      <center>
        <div className={styles.hospital_cards}>
          {hospitals.map((hospital) => {
            return (
              <Link
                to={`/patient/40/${hospital.hosId}`}
                style={{ textDecoration: "none" }}
              >
                <div className={styles.card}>
                  <div className={styles.img_container}>
                    <img src={hospital.photoUrl} className={styles.image} />
                  </div>
                  {/* <p className={styles.details} >Name : {hospital.name}</p>
                                        <p className={styles.details}>Location : {hospital.location}</p>
                                        <p className={styles.details}>Rating : {hospital.rating}</p> */}
                  <h3>{hospital.hosName}</h3>
                  <table className={styles.appoinmentTable}>
                    <tr>
                      <th style={{ backgroundColor: "white" }}>Location </th>
                      <td style={{ backgroundColor: "white" }}>
                        : {hospital.location}
                      </td>
                    </tr>
                    <tr>
                      <th style={{ backgroundColor: "white" }}>Ratings </th>
                      <td style={{ backgroundColor: "white" }}>
                        : {hospital.rating}
                      </td>
                    </tr>
                  </table>
                  <button
                    style={{ marginTop: "10px" }}
                    className="btn btn-primary"
                  >
                    VIEW
                  </button>
                  {/* <Link to={`/patient/40/${hospital.id}`} className={styles.availability}>Doctor's Availability {'-->'}</Link> */}
                </div>
              </Link>
            );
          })}
        </div>
      </center>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Hospitals;
