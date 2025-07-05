import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClinicProvider } from './context/ClinicContext';
import PatientProfile from './components/PatientProfile';
import AppointmentBooking from './components/AppointmentBooking';
import PaymentCapture from './components/PaymentCapture';
import ChatSupport from './components/ChatSupport';

function App() {
  return (
    <ClinicProvider>
      <Router>
        <Routes>
          <Route path="/" element={<PatientProfile />} />
          <Route path="/book" element={<AppointmentBooking />} />
          <Route path="/payment" element={<PaymentCapture />} />
        </Routes>
        <ChatSupport />
      </Router>
    </ClinicProvider>
  );
}

export default App;
