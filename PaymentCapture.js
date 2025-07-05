import React, { useContext } from 'react';
import { ClinicContext } from '../context/ClinicContext';

export default function PaymentCapture() {
  const { selectedPatient, priceEstimate } = useContext(ClinicContext);

  return (
    <div>
      <h2>Payment for {selectedPatient?.first_name}</h2>
      <p>Estimated cost: ${priceEstimate}</p>
      <button>Complete Payment</button>
    </div>
  );
}
