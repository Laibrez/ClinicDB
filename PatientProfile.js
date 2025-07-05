import React, { useContext } from 'react';
import { ClinicContext } from '../context/ClinicContext';
import { useNavigate } from 'react-router-dom';

export default function PatientProfile() {
  const { patients, setSelectedPatient } = useContext(ClinicContext);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Patient Profiles</h2>
      <ul>
        {patients.map(patient => (
          <li key={patient.patient_id}>
            {patient.first_name} {patient.last_name} - {patient.city}
            <button onClick={() => {
              setSelectedPatient(patient);
              navigate('/book');
            }}>Book Appointment</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
