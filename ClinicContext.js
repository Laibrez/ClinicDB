import React, { createContext, useState, useEffect } from 'react';
export const ClinicContext = createContext();

export const ClinicProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [priceEstimate, setPriceEstimate] = useState(0);

  useEffect(() => {
    fetch('/api/patients').then(res => res.json()).then(setPatients);
    fetch('/api/doctors').then(res => res.json()).then(setDoctors);
  }, []);

  return (
    <ClinicContext.Provider value={{
      patients, doctors, appointments,
      setAppointments, selectedPatient, setSelectedPatient,
      priceEstimate, setPriceEstimate
    }}>
      {children}
    </ClinicContext.Provider>
  );
};
